import { t } from '@lingui/macro';
import { backSvg } from '@src/app/assets/create/backSvg';
import { colorsHaqqex } from '@src/constants';
import { Queue, Stack } from '@src/styles/Spacing';
import { HaqqexText } from '@src/styles/Typografy/HaqqexText';
import { Units } from '@src/styles/Units';
import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';
import { styles } from '../styles';

export const HeaderCard = ({ item, state, handleGoBack, handleOpenModal }: any) => {
  const isHeaderNavigate = item.article || item.back;
  return (
    <>
      {item.back && item.q === state && (
        <View style={styles.gobackBtn}>
          <TouchableOpacity
            disabled={item.q !== state}
            onPress={handleGoBack}
            style={styles.touchArticle}
          >
            <SvgXml xml={backSvg} width={Units.s16} height={Units.s16} />
            <HaqqexText
              typography='text12'
              textAlign='right'
              color={colorsHaqqex.LIGHT3}
              weight={'400'}
            >
              {t`Назад`}
            </HaqqexText>
          </TouchableOpacity>
        </View>
      )}
      {item.article && item.q === state && (
        <View style={styles.moreBtn}>
          <TouchableOpacity
            onPress={handleOpenModal}
            disabled={item.q !== state}
            style={styles.touchMore}
          >
            <HaqqexText
              typography='text12'
              textAlign='right'
              color={colorsHaqqex.LIGHT3}
              weight={'400'}
              style={styles.touchLearn}
            >
              {t`Узнать подробнее`}
            </HaqqexText>
            <Queue size='s10' />
            <View style={styles.touchIconMore}>
              <HaqqexText
                typography='text10'
                textAlign='right'
                color={colorsHaqqex.YELLOW4}
                weight={'700'}
              >
                ?
              </HaqqexText>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {isHeaderNavigate && item.q === state && <Stack size='s40' />}
    </>
  );
};
