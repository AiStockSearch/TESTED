import { Platform } from 'react-native';

const isPlatform = (fontWeight: string | number, { fontFamily }: { fontFamily: string }) =>
  Platform.OS === 'ios'
    ? { fontWeight: [fontWeight].join('') }
    : { fontWeight: [fontWeight].join(''), fontFamily };

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

export const fontWeightsAndroid: Record<
  FontWeightNumericValues,
  { fontWeight: string } | { fontWeight: string; fontFamily: string }
> = {
  100: isPlatform(100, { fontFamily: 'Onest-Thin' }),
  200: isPlatform(200, { fontFamily: 'Onest-Thin' }),
  300: isPlatform(300, { fontFamily: 'Onest-Light' }),
  400: isPlatform(400, { fontFamily: 'Onest-Regular' }),
  500: isPlatform(500, { fontFamily: 'Onest-Medium' }),
  600: isPlatform(600, { fontFamily: 'Onest-SemiBold' }),
  700: isPlatform(700, { fontFamily: 'Onest-Bold' }),
  800: isPlatform(800, { fontFamily: 'Onest-ExtraBold' }),
  900: isPlatform(900, { fontFamily: 'Onest-Black' }),
};

export type FontSize =
  | 'text10'
  | 'text12'
  | 'text14'
  | 'text16'
  | 'text18'
  | 'text20'
  | 'text22'
  | 'text32'
  | 'text52'
  | 'text72'
  | 'text24'
  | 'text30';
