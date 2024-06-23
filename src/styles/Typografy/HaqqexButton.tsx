import colorsHaqqex from '@constantshaqqex/colorsHaqqex';
import { HaqqexText, THaqqexTextProps } from '@src/styles/Typografy/HaqqexText';
import { Units } from '@styleshaqqex/Units';
import React from 'react';
import {
  Keyboard,
  TouchableOpacity as RNTouchableOpacity,
  StyleSheet,
  TextProps,
  View,
  ViewStyle,
} from 'react-native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native-gesture-handler';
import * as R from 'ramda';

type TStyles = {
  viewStyle?: ViewStyle | {};
  touchStyle?: ViewStyle | {};
  textStyle?: (TextProps & THaqqexTextProps) | {};
};

export type THaqqexButton = Omit<TouchableOpacityProps, 'style'> & {
  style?: TStyles;
  native?: boolean;
  disabled: boolean;
  onPress: () => void;
  children: string;
};
export const HaqqexButton = (props?: THaqqexButton) => {
  const children = props?.children;
  const [viewStyle, touchStyle, textStyle] = R.pipe(
    R.defaultTo({}),
    R.paths<TStyles>([['viewStyle'], ['touchStyle'], ['textStyle']])
  )(props?.style) as [TStyles['viewStyle'], TStyles['touchStyle'], TStyles['textStyle']];

  let TouchComp: typeof RNTouchableOpacity = RNTouchableOpacity;
  if (!props?.native) {
    TouchComp = TouchableOpacity as unknown as typeof RNTouchableOpacity;
  }

  return (
    <View
      style={[styles.viesStyleDefault, { marginTop: Units.s1, position: 'relative' }, viewStyle,]}
    >
      <TouchComp
        {...props}
        onPressIn={() => {
          Keyboard.dismiss();
          props?.onPress();
        }}
        style={[styles.touchStyleDefault, { minHeight: Units.s52, zIndex: 1000 }, touchStyle]}
      >
        <HaqqexText
          typography='text16'
          weight='600'
          textAlign='center'
          color={colorsHaqqex.DARK5}
          {...textStyle}
        >
          {children}
        </HaqqexText>
      </TouchComp>
    </View>
  );
};
const styles = StyleSheet.create({
  viesStyleDefault: {
    width: 'auto',
    borderStartColor: colorsHaqqex.TRANSPARENT,
    minHeight: Units.s52,
    borderRadius: Units.s10,
    borderColor: colorsHaqqex.WHITE,
  },
  touchStyleDefault: {
    backgroundColor: colorsHaqqex.YELLOW4,
    borderRadius: Units.s12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Units.s14,
  },
});
