import { RV } from '@styleshaqqex/Utils';
import { TextStyle } from 'react-native';

export type FontWeightNumericValues =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export const fontWeightsAndroid: Record<FontWeightNumericValues, 'normal' | 'bold'> = {
  100: 'normal',
  200: 'normal', // 'Extra Light',
  300: 'normal',
  400: 'normal',
  500: 'normal', // 'Medium',
  600: 'bold',
  700: 'bold', // 'Bold',
  800: 'bold', // 'ExtraBold',
  900: 'bold', // 'Black',
};

export type FontSize =
  | 'text10'
  | 'text12'
  | 'text13'
  | 'text15'
  | 'text14'
  | 'text16'
  | 'text18'
  | 'text20'
  | 'text22'
  | 'text24'
  | 'text28'
  | 'text30'
  | 'text52'
  | 'text32'
  | 'text72'
  | 'text36';

export const Typography: Record<FontSize, TextStyle> = {
  text10: {
    fontSize: RV(10),
    lineHeight: RV(12),
    letterSpacing:RV(-0.16)
  },
  text12: {
    fontSize: RV(12),
    lineHeight: RV(16),
    letterSpacing:RV(-0.16)
  },
  text13: {
    fontSize: RV(13),
    lineHeight: RV(18),
    letterSpacing:RV(-0.16)
  },
  text14: {
    fontSize: RV(14),
    lineHeight: RV(20),
    letterSpacing:RV(-0.16)
  },
  text15: {
    fontSize: RV(15),
    lineHeight: RV(20),
    letterSpacing:RV(-0.16)
  },
  text16: {
    fontSize: RV(16),
    lineHeight: RV(24),
    letterSpacing:RV(-0.16)
  },
  text18: {
    fontSize: RV(18),
    lineHeight: RV(24),
    letterSpacing:RV(-0.16)
  },
  text20: {
    fontSize: RV(20),
    lineHeight: RV(24),
    letterSpacing:RV(-0.16)
  },
  text22: {
    fontSize: RV(22),
    lineHeight: RV(24),
    letterSpacing:RV(-0.16)
  },
  text24: {
    fontSize: RV(24),
    lineHeight: RV(32),
    letterSpacing:RV(-0.24)
  },
  text28: {
    fontSize: RV(26),
    lineHeight: RV(28),
    letterSpacing:RV(-0.16)
  },
  text30: {
    fontSize: RV(30),
    lineHeight: RV(32),
    letterSpacing:RV(-0.16)
  },
  text32: {
    fontSize: RV(32),
    lineHeight: RV(36),
    letterSpacing:RV(-0.16)
  },
  text36: {
    fontSize: RV(36),
    lineHeight: RV(42),
    letterSpacing:RV(-0.16)
  },
  text52: {
    fontSize: RV(52),
    lineHeight: RV(64),
    letterSpacing:RV(-0.16)
  },
  text72: {
    fontSize: RV(72),
    lineHeight: RV(82),
    letterSpacing:RV(-0.16)
  },
};
