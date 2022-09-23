import { useMemo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { getWeatherIcon, getDay } from '@modules/weather/services/weather_display';

interface IProps {
  day: number;
  temperature_max: number;
  temperature_min: number;
  weather_code: number;
}

export const WeatherCard = ({ day, temperature_max, temperature_min, weather_code }: IProps) => {
  const icon = useMemo(() => getWeatherIcon(weather_code), [weather_code]);
  const dayName = useMemo(() => getDay(day), [day]);

  return (
    <View style={styles.card}>
      <Image style={styles.weatherIcon} source={{uri: icon }} />
      <Text style={styles.day}>{dayName}</Text>
      <View style={styles.temperatureContainer}>
        <Text style={styles.temperature}>{Math.round(temperature_max)}°</Text>
        <Text style={styles.temperature}>{Math.round(temperature_min)}°</Text>
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  day: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10
  },
  temperatureContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    flex: 1,
  },
  temperature: {
    fontSize: 20,
    fontWeight: 'bold',
  },

});
