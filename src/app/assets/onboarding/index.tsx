import colorsHaqqex from '@constantshaqqex/colorsHaqqex';
import { ViewStyle } from 'react-native';
import { OnboardingClaritySvg } from './OnboardingClaritySvg';
import { OnboardingSeamlessSvg } from './OnboardingSeamlessSvg';
import { OnboardingToolsSvg } from './OnboardingToolsSvg';
import { EONBORDINGTYPE } from './type';

export type TSvgChange = {
  [key in EONBORDINGTYPE]: {
    svg: string;
    position: ViewStyle;
    style: ViewStyle & { backgroudColor: string };
  };
};

export const SVGCHANGE: TSvgChange = {
  [EONBORDINGTYPE.CLARITY]: {
    svg: OnboardingClaritySvg,
    position: { top: 0 },
    style: { backgroudColor: colorsHaqqex.DARK6 },
  },
  [EONBORDINGTYPE.SEAMLESS]: {
    svg: OnboardingSeamlessSvg,
    position: { top: 0 },
    style: { backgroudColor: colorsHaqqex.DARK6 },
  },
  [EONBORDINGTYPE.TOOLS]: {
    svg: OnboardingToolsSvg,
    position: { top: 0 },
    style: { backgroudColor: colorsHaqqex.DARK5 },
  },
};
