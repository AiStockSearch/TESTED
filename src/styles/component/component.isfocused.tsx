import colorsHaqqex from '@constantshaqqex/colorsHaqqex';
import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export const IsScreenFocused = React.memo((props: { children: React.ReactNode }) => {
  const isFocused = useIsFocused();

  if (!isFocused) {
    return <View style={[StyleSheet.absoluteFill, { backgroundColor: colorsHaqqex.DARK6 }]} />;
  }

  return (
    <View style={StyleSheet.absoluteFill}>
      <Animated.View
        entering={FadeIn.duration(400)}
        exiting={FadeOut.duration(400)}
        style={{ flex: 1 }}
      >
        {props.children}
      </Animated.View>
    </View>
  );
});
