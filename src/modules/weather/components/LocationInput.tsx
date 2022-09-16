import React, { useCallback } from 'react';
import { View, TextInput, Button, StyleSheet, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { geocodeCity } from '@core/services/api';
import { useWeather } from '@modules/weather/providers/WeatherProvider';

type Nav = {
  navigate: (screen: string) => void;
};

export const LocationInput = () => {
  const { setLocation, city, setCity } = useWeather();
  const navigation = useNavigation<Nav>();

  const handleLocationChange = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setCity(e.nativeEvent.text);
    },
    [setCity],
  );

  const handleLocationSubmit = useCallback(() => {
    if (city) {
      geocodeCity(city).then((location) => {
        setLocation(location);
        navigation.navigate('Weather');
      });
    }
  }, [city]);

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} onChange={handleLocationChange} placeholder='Enter a location' />
      <Button color={'#BB86FC'} title='Search' onPress={handleLocationSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    width: '80%',
    marginHorizontal: '10%',
    marginVertical: 20,
  },
  input: {
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BB86FC',
    font: '400 18px Roboto',
    padding: 10,
    flex: 1,
  },
});
