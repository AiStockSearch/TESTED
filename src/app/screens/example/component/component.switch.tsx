import { successInputSvg } from '@src/app/assets/unauth/successInputSvg';
import { colorsHaqqex } from '@src/constants';
import { Queue } from '@src/styles/Spacing';
import { HaqqexText } from '@src/styles/Typografy/HaqqexText';
import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';
import { styles } from '../styles';

export const SwitchCard = ({ item, state, handleChangeState, currentState, index }: any) => {
  return (
    <>
      {item.mode && (
        <View style={{ marginTop: 10 }}>
          {item.mode.map((itemEl: any, indexEl: number) => {
            return (
              <TouchableOpacity
                disabled={item.q !== state}
                onPress={handleChangeState(itemEl)}
                style={[
                  styles.touchMode,
                  {
                    borderBottomWidth: item.mode?.length - 1 === indexEl ? 0 : 1,
                  },
                ]}
                key={indexEl}
              >
                <View
                  style={[styles.itemMode, currentState.includes(itemEl) && styles.backgroundLearn]}
                >
                  <Animated.View
                    entering={ZoomIn.duration(500)}
                    exiting={ZoomOut.duration(500)}
                    style={[
                      { position: 'absolute', top: -4, left: -2, zIndex: 1000 },
                      !currentState.includes(itemEl) && { display: 'none' },
                    ]}
                  >
                    <SvgXml xml={successInputSvg} />
                  </Animated.View>
                </View>
                <Queue size='s10' />
                <HaqqexText
                  key={index}
                  typography='text12'
                  textAlign='left'
                  color={colorsHaqqex.WHITE}
                  weight={'300'}
                >
                  {itemEl}
                </HaqqexText>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </>
  );
};
