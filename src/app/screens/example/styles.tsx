import { colorsHaqqex } from '@src/constants';
import { Units } from '@src/styles/Units';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  moreBtn: { position: 'absolute', top: 0, right: 0, zIndex: 1000 },
  gobackBtn: { position: 'absolute', top: 0, left: 0, zIndex: 1000 },
  backgroundLearn: { backgroundColor: colorsHaqqex.DARK1 },
  touchLearn: { width: Units.s50 + Units.s16, lineHeight: Units.s10 },
  touchArticle: {
    padding: Units.s20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchMore: {
    padding: Units.s10,
    paddingHorizontal: Units.s20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchIconMore: {
    width: Units.s16,
    height: Units.s16,
    borderRadius: Units.s50,
    backgroundColor: colorsHaqqex.DARK1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchMode: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: Units.s6,
    borderColor: colorsHaqqex.DARK4,
  },
  itemMode: {
    width: Units.s14,
    height: Units.s14,
    backgroundColor: colorsHaqqex.DARK4,
    borderRadius: Units.s4,
  },
  withOutMain: {
    backgroundColor: colorsHaqqex.DARK5,
    borderRadius: Units.s10,
  },
  block: {
    paddingVertical: Units.s10,
    marginBottom: Units.s10,
    paddingHorizontal: Units.s16,
  },
});
