import { useIsFocused } from '@react-navigation/native';
import { colorsHaqqex } from '@src/constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNative } from '..';
import Connected from '@src/app/screens/example/connected.example';

export const ExampleRoute = () => {
  const isfocused = useIsFocused();
  if (!isfocused) {
    return (
      <StackNative.Screen
        name={'MAIN'}
        component={() => (
          <View style={[{ backgroundColor: colorsHaqqex.DARK6 }, StyleSheet.absoluteFill]} />
        )}
      />
    );
  }
  return (
    <StackNative.Navigator
      initialRouteName={'MAIN'}
      detachInactiveScreens
      screenOptions={{ headerShown: false }}
    >
      <StackNative.Screen name={'MAIN'} component={Connected} />
    </StackNative.Navigator>
  );
};
