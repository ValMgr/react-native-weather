import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { LocationInput } from '@modules/weather/components/LocationInput';

export const Home = () => {
  return (
    <View style={styles.home}>
      <LocationInput  />
      <Text style={styles.homeText}>
        .Weather is an application to get current weather from anywere. Just type your location in the input field
      </Text>
      <Text style={styles.homeText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id quam luctus, aliquet est accumsan, vestibulum
        sapien.
      </Text>

      <Text style={styles.homeText}>
        Sed a elit et nunc sodales feugiat id congue turpis. Pellentesque dui mauris, dictum hendrerit justo id, pulvinar
        vulputate nibh. Ut pellentesque diam id tincidunt vestibulum.
      </Text>
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
  homeText: {
    color: '#fff',
    fontSize: 20,
    paddingHorizontal: '10%',
    marginBottom: 20,
  },
});
