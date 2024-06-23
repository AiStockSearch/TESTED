import { colorsHaqqex } from '@src/constants';
import { Typography } from '@styleshaqqex/Typografy';
import { fontWeightsAndroid } from '@styleshaqqex/Typografy/styles';
import * as R from 'ramda';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';

export type THaqqexTextProps = {
  textAlign?: TextStyle['textAlign'];
  color: TextStyle['color'];
  typography: string;
  weight: TextStyle['fontWeight'];
  family?: TextStyle['fontFamily'];
};

const fontWeight = (weight: THaqqexTextProps['weight']): THaqqexTextProps['weight'] =>
  R.path<THaqqexTextProps['weight']>([[weight ?? '500'].join(''), 'fontWeight'])(
    fontWeightsAndroid
  );

const fontSize = ({ typography }: THaqqexTextProps) =>
  R.path<number>([[typography ?? 'text12'].join(''), 'fontSize'])(Typography) as number;

const lineHeight = ({ typography }: THaqqexTextProps) =>
  R.path<number>([[typography ?? 'text12'].join(''), 'lineHeight'])(Typography) as number;

const letterSpacing = ({ typography }: THaqqexTextProps) =>
  R.path<number>([[typography ?? 'text12'].join(''), 'letterSpacing'])(Typography) as number;

export const HaqqexText = (props: TextProps & THaqqexTextProps) => {
  let style = Object.assign([
    props.style,
    {
      textAlign: props.textAlign || 'center',
      fontWeight: fontWeight(props.weight),
      fontSize: fontSize(props),
      lineHeight: lineHeight(props),
      letterSpacing: letterSpacing(props),
      color: props.color || colorsHaqqex.BLACK,
    },
  ]) as TextStyle;

  return (
    <Text {...props} style={[style, styles.defaultOutput]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultOutput: {
    padding: 0,
    margin: 0,
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
});
