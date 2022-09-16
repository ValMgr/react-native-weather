import React, { useEffect, useState, useMemo } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { fetchWeather } from '@core/services/api';
import { useWeather } from '@modules/weather/providers/WeatherProvider';
import { WeatherCard } from '@modules/weather/components/WeatherCard';
import { DAYS_TO_SHOW } from '@core/constants/api';

export const Weather = () => {
  const { location, city } = useWeather();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [parsedWeather, setParsedWeather] = useState<any | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    if(city)
      navigation.setOptions({ title: city });
  }, [city, navigation]);


  useEffect(() => {
    (async () => {
      if (isLoading && location) {
        const data = await fetchWeather(location);
        const parsedData = [];
        for (let i = 0; i < DAYS_TO_SHOW; i++) {
          parsedData.push({
            temperature_max: data.daily.temperature_2m_max[i],
            temperature_min: data.daily.temperature_2m_min[i],
            weather_code: data.daily.weathercode[i],
          });
        }

        setParsedWeather(parsedData);
        setIsLoading(false);
      }
    })();
  }, [location]);

  const renderWeatherList = useMemo(() => {
    if (!parsedWeather) {
      return null;
    }

    return parsedWeather.map((weather: any, index: number) => {
      return (
        <WeatherCard
          key={index}
          day={index}
          temperature_max={weather.temperature_max}
          temperature_min={weather.temperature_min}
          weather_code={weather.weather_code}
        />
      );
    });
  }, [parsedWeather]);

  if (isLoading) {
    return (
      <View style={styles.loading_container}>
        <ActivityIndicator size='large' color='#BB86FC' />
      </View>
    );
  }

  return <View style={styles.container}>{renderWeatherList}</View>;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#161616',
    padding: 10,
  },
  loading_container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#161616',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
