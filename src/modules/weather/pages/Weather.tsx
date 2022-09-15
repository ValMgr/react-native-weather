import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useWeather } from '@modules/weather/providers/WeatherProvider';

export const Weather = () => {
  const { location } = useWeather();

  return (
    <View style={styles.weather}>
      <Text style={styles.weatherText}>
        {location.lat} {location.lng}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weather: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#161616'
  },
  weatherText: {
    color: '#fff',
    fontSize: 20,
  },
});
