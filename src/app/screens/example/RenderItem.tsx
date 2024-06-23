import HaqqexInput from '@src/styles/component/component.input';
import { colorsHaqqex } from '@src/constants';
import { Stack } from '@src/styles/Spacing';
import { HaqqexButton } from '@src/styles/Typografy/HaqqexButton';
import { HaqqexText } from '@src/styles/Typografy/HaqqexText';
import React from 'react';
import { View } from 'react-native';
import Animated, { FadeIn, FadeOut, ZoomOut } from 'react-native-reanimated';
import * as R from 'ramda';
import { useRoute } from '@react-navigation/native';
import { validateInputName } from './validator/validator.error';
import { RenderInputError } from './component/error.input';
import { SwitchCard } from './component/component.switch';
import { HeaderCard } from './component/component.header';
import { styles } from './styles';

export const RenderItem = ({
  index,
  item,
  state,
  incdadd,
  handleGoBack,
  handleNextStep,
  handleOpenModal,
}: any) => {
  const [currentState, setCurrentState] = React.useState<string[]>([]);
  const route = useRoute();
  const [focus, setFocus] = React.useState<boolean>(false);
  const ref = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentItemQ = item.q === state;
  const handleChangeState = (itemEl: string) => () => {
    setCurrentState((prev) => {
      if (item.single) {
        return [itemEl];
      }
      if (prev.includes(itemEl)) {
        return prev.filter((el) => el !== itemEl);
      }
      return [...prev, itemEl];
    });
  };

  if (state === 'valid') {
    return <View />;
  }

  const { disabled, currentDisabled } = validateInputName(item, state, currentState, route);

  return (
    <Animated.View
      entering={FadeIn.duration(500)}
      exiting={item.q !== 'valid' ? ZoomOut : FadeOut.duration(500)}
      style={[
        styles.block,
        item.q !== 'q0' && styles.withOutMain,
        !incdadd.includes(item.q) && { display: 'none' },
      ]}
    >
      <HeaderCard
        item={item}
        state={state}
        handleGoBack={handleGoBack}
        handleOpenModal={handleOpenModal}
      />
      <Stack size='s20' />
      <HaqqexText typography='text15' textAlign='left' color={colorsHaqqex.LIGHT3} weight={'400'}>
        {item.desciption}
      </HaqqexText>
      <SwitchCard
        item={item}
        state={state}
        handleChangeState={handleChangeState}
        currentState={currentState}
        index={index}
      />
      {!R.isEmpty(item.input) && (
        <View>
          <Stack size='s20' />
          {item.input?.map((itemEl: any, indexEl: number) => {
            itemEl = R.pipe(
              R.assocPath(['input', 'editable'], currentItemQ),
              R.assocPath(['input', 'onFocus'], () => {
                ref.current && clearTimeout(ref.current);
                ref.current = setTimeout(() => {
                  setFocus(itemEl.input.name);
                }, 100);
              }),
              R.assocPath(['input', 'onBlur'], () => {
                ref.current && clearTimeout(ref.current);
                ref.current = setTimeout(() => {
                  setFocus(false);
                }, 100);
              }),
              R.assocPath(['childrenAddon', 'visible'], !currentDisabled[indexEl]),
              R.assocPath(['childrenAddon', 'component'], () => {
                return (
                  <View style={focus !== itemEl.input.name && { display: 'none' }}>
                    <RenderInputError currentItemQ={currentItemQ} name={itemEl.input.name} />
                  </View>
                );
              })
            )(itemEl);

            return (
              <View key={[indexEl].join('')}>
                <HaqqexInput {...itemEl} />
              </View>
            );
          })}
        </View>
      )}
      {item.button && currentItemQ && (
        <View>
          {!R.isEmpty(item.input) ? <Stack size='s10' /> : <Stack size='s30' />}
          <HaqqexButton
            disabled={disabled}
            onPress={handleNextStep(currentState, item)}
            style={
              disabled
                ? {
                    touchStyle: {
                      backgroundColor: colorsHaqqex.DARK2,
                    },
                    textStyle: {
                      color: colorsHaqqex.LIGHT6,
                    },
                  }
                : {}
            }
          >
            {item.button}
          </HaqqexButton>
          <Stack size='s10' />
        </View>
      )}
    </Animated.View>
  );
};
