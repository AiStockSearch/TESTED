import { RV } from '@styleshaqqex/Utils';
import { TextStyle } from 'react-native';
import { FontSize } from '@styleshaqqex/Typografy/styles';

export const Typography: Record<FontSize, TextStyle> = {
  text10: {
    fontSize: RV(10),
    lineHeight: RV(12),
  },
  text12: {
    fontSize: RV(12),
    lineHeight: RV(14),
  },
  text14: {
    fontSize: RV(14),
    lineHeight: RV(18),
  },
  text16: {
    fontSize: RV(16),
    lineHeight: RV(20),
  },
  text18: {
    fontSize: RV(18),
    lineHeight: RV(24),
  },
  text20: {
    fontSize: RV(20),
    lineHeight: RV(24),
  },
  text22: {
    fontSize: RV(22),
    lineHeight: RV(24),
  },
  text24: {
    fontSize: RV(24),
    lineHeight: RV(28),
  },
  text30: {
    fontSize: RV(28),
    lineHeight: RV(32),
  },
  text32: {
    fontSize: RV(32),
    lineHeight: RV(35),
  },
  text52: {
    fontSize: RV(52),
    lineHeight: RV(52),
  },
  text72: {
    fontSize: RV(72),
    lineHeight: RV(72),
  },
};
