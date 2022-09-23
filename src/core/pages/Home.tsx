import React from 'react';
import { View, StyleSheet } from 'react-native';

import { LocationInput } from '@modules/weather/components/LocationInput';

export const Home = () => {
  return (
    <View style={styles.home}>
      <LocationInput  />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: 10,
    backgroundColor: '#161616',
  },
});
