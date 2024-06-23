import { IsScreenFocused } from '@src/styles/component/component.isfocused';
import Screen from '@helpers/component/screen.section';
import { t } from '@lingui/macro';
import { colorsHaqqex } from '@src/constants';
import { Layout } from '@src/styles/Layout';
import { Stack } from '@src/styles/Spacing';
import { HaqqexText } from '@src/styles/Typografy/HaqqexText';
import { Units } from '@src/styles/Units';
import * as R from 'ramda';
import React from 'react';
import { View } from 'react-native';
import Animated, { FadeIn, ZoomIn } from 'react-native-reanimated';
import Video, { VideoRef } from 'react-native-video';
import { RenderItem } from './RenderItem';
import { CONFIG_CTX, TQuestionConfig } from './section/config.section';
import { useHookContext } from './useHookContext';

const Connected = () => {
  const { sectionData, state, handleNextStep, incdadd, handleGoBack, handleOpenModal } =
    useHookContext();
  const videoRef = React.useRef<VideoRef>(null);
  if (R.equals('valid')(state)) {
    return (
      <Animated.View
        entering={ZoomIn.duration(1500)}
        exiting={FadeIn.duration(1500)}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <View style={{ paddingHorizontal: Units.s40 }}>
          <HaqqexText
            color={colorsHaqqex.YELLOW4}
            textAlign='center'
            typography='text16'
            weight='600'
          >
            {t`Исходя из ваших ответов мы готовим,`}
          </HaqqexText>
          <HaqqexText
            color={colorsHaqqex.YELLOW4}
            textAlign='center'
            typography='text16'
            weight='600'
          >
            {t`для вас ваш рабочий стол инвестора.`}
          </HaqqexText>
          <Stack size='s40' />

          <Video
            source={{
              uri: 'https://cdnl.iconscout.com/lottie/premium/preview-watermark/stock-market-analysis-5379484-4496055.mp4',
            }}
            repeat={true}
            ref={videoRef}
            style={{ width: Layout.window.width, height: Layout.window.width }}
          />
            <Stack size='s40' />
          <View style={{ paddingHorizontal: Units.s40 }}>
            <HaqqexText color={colorsHaqqex.WHITE} typography='text16' weight='600'>
              {t`Поздравляем, вы успешно прошли и стали владельцем дневника трейдера.`}
            </HaqqexText>
            <Stack size='s10' />
            <HaqqexText color={colorsHaqqex.WHITE} typography='text12' weight='300'>
              {t`Мы отправили на вашу почту письмо с инструкцией дальнейших действий.`}
            </HaqqexText>
          </View>
        </View>
      </Animated.View>
    );
  }

  return (
    <Screen
      data={sectionData}
      leftBtn
      title={R.pipe(
        R.path<TQuestionConfig['title']>([state, 'title']),
        R.defaultTo('')
      )(CONFIG_CTX)}
      renderItem={(props: any) => (
        <RenderItem
          {...props}
          state={state}
          incdadd={incdadd}
          handleGoBack={handleGoBack}
          handleOpenModal={handleOpenModal}
          handleNextStep={handleNextStep}
        />
      )}
    />
  );
};

export default () => (
  <IsScreenFocused>
    <Connected />
  </IsScreenFocused>
);
