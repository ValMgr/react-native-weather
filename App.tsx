import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Header } from '@core/components/Header';
import { WeatherProvider } from '@modules/weather/providers/WeatherProvider';
import { Home } from '@core/pages/Home';
import { Weather } from '@modules/weather/pages/Weather';

const Stack = createStackNavigator();

export default function App() {
  const headerOptions = {
    headerStyle: { backgroundColor: '#000', borderBottomColor: '#BB86FC', borderBottomWidth: 1 },
    headerTintColor: '#BB86FC',
  }

  return (
    <NavigationContainer>
      <WeatherProvider>
        <Header />
        <Stack.Navigator>
          <Stack.Screen
            options={headerOptions}
            name='Search'
            component={Home}
          />
          <Stack.Screen
            options={headerOptions}
            name='Weather'
            component={Weather}
          />
        </Stack.Navigator>
        <StatusBar style='auto' />
      </WeatherProvider>
    </NavigationContainer>
  );
}
