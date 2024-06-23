import { t } from '@lingui/macro';
import { colorsHaqqex } from '@src/constants';
import { HaqqexText } from '@src/styles/Typografy/HaqqexText';
import React from 'react';
import { View } from 'react-native';
import * as R from 'ramda';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export const RenderInputError = ({ currentItemQ, name }: any) => {
  if (!currentItemQ) {
    return <View />;
  }
  return (
    <Animated.View entering={FadeIn.duration(500)} exiting={FadeOut.duration(500)}>
      <HaqqexText color={colorsHaqqex.LIGHT6} weight={'400'} textAlign='left' typography='text12'>
        {t`Неправильно указан формат:`}
      </HaqqexText>
      <HaqqexText color={colorsHaqqex.ERROR4} weight={'400'} textAlign='left' typography='text12'>
        {R.cond([
          [R.equals('PERSONAL_NAME'), R.always('Ivanov Ivan')],
          [R.equals('PERSONAL_CHANNEL_NAME'), R.always('@fintechmustreets')],
          [R.equals('PERSONAL_PHONE'), R.always('8-800-100-12-12 или +7-999-999-99-99')],
          [R.equals('PERSONAL_EMAIL'), R.always('fintechmustreets@gmail.com')],
        ])(name)}
      </HaqqexText>
    </Animated.View>
  );
};
