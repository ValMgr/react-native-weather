import React, { useCallback } from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const BackButton = () => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View>
      <Button title='Back' onPress={handlePress} />
    </View>
  );
};
