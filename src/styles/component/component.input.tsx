import { useFocusEffect, useRoute } from '@react-navigation/native';
import { clearInputSvg } from '@src/app/assets/unauth/clearInputSvg';
import { clearShowInputSvg } from '@src/app/assets/unauth/clearShowInputSvg';
import { successInputSvg } from '@src/app/assets/unauth/successInputSvg';
import { useHookNavigation } from '@src/app/hooks/hooks.useNavigation';
import { colorsHaqqex } from '@src/constants';
import { Stack } from '@src/styles/Spacing';
import { HaqqexText, THaqqexTextProps } from '@src/styles/Typografy/HaqqexText';
import { Units } from '@src/styles/Units';
import * as R from 'ramda';
import React from 'react';
import {
  Alert,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextProps,
  View,
  ViewStyle,
} from 'react-native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';

export type THaqqexInput = {
  viewStyle: ViewStyle;
  input: TextInputProps & { name: TextInputProps['value']; validVisible: boolean };
  placeholder?: { text?: TextProps & THaqqexTextProps; placeholderName?: string };
  error?: { text?: TextProps & THaqqexTextProps; placeholderName?: string | null };
  action?: TextInputProps & {
    handleHelperBtn?: TouchableOpacityProps;
    name: string;
  };
  helperBtn?: {
    data: { text: string; style?: ViewStyle } & THaqqexTextProps;
    action: TouchableOpacityProps & TextInputProps;
  };
  childrenAddon?: { visible: boolean; component: () => React.ReactNode } | undefined;
};

export function InputCmdonChange(name: string, route?: any) {
  return {
    onChangeText: ({ value, replacement }: { value: string; replacement?: string }): any => {
      const keysValue = R.pipe(
        R.path(['params']),
        R.defaultTo({}),
        R.omit(['modal']),
        R.keys
      )(route);

      R.defaultTo([])(keysValue)?.forEach((x: string) => {
        route = R.pipe(
          R.assocPath(['params', x, 'error'], null),
        )(route);
      });
  
      return R.pipe(
        R.path(['params']),
        R.defaultTo({}),
        R.assocPath([name, 'value'], value),
        R.assocPath([name, 'error'], null),
      )(route);
    },
    onBlur: () => {
      return R.pipe(
        R.path(['params']),
        R.defaultTo({}),
        R.assocPath([name, 'focus'], false)
      )(route);
    },
    onFocus: () => {
      return R.pipe(R.path(['params']), R.defaultTo({}), R.assocPath([name, 'focus'], true))(route);
    },
    onValidText: ({ valid }: { valid: boolean | string }): any => {
      return R.pipe(
        R.path(['params']),
        R.defaultTo({}),
        R.assocPath([name, 'valid'], valid),
        R.assocPath([name, 'validDesc'], valid),
        R.assocPath([name, 'error'], null)
      )(route);
    },
    onChangeErrorText: (error: string): any => {
      return R.pipe(
        R.path(['params']),
        R.defaultTo({}),
        R.assocPath(
          [name, 'error'],
          R.cond([
            [R.equals('Login alredy taken'), R.always('Login is already taken')],
            [R.T, R.always(error)],
            [R.F, R.always(error)],
          ])(error)
        ),
        R.assocPath([name, 'valid'], null)
      )(route);
    },
    onChangeDisabledText: ({ disabled }: { disabled: boolean }): any => {
      return R.pipe(
        R.path(['params']),
        R.defaultTo({}),
        R.assocPath([name, 'disabled'], disabled)
      )(route);
    },
    error: R.pipe(
      R.path(['params']),
      R.defaultTo({}),
      R.path<string | undefined>([name, 'error']),
      R.defaultTo(undefined)
    )(route),
    valid: R.pipe(
      R.path(['params']),
      R.defaultTo({}),
      R.path<boolean>([name, 'valid']),
      R.defaultTo(false)
    )(route),
    editable: R.pipe(
      R.path(['params']),
      R.defaultTo({}),
      R.path<boolean>([name, 'editable']),
      R.defaultTo(true)
    )(route),
    value: R.pipe(
      R.path(['params']),
      R.defaultTo({}),
      R.path<string | undefined>([name, 'value']),
      R.defaultTo(undefined)
    )(route),
  };
}

const HaqqexInput = (props: THaqqexInput) => {
  const [focus, setFocus] = React.useState(false);
  const refInput = React.useRef<TextInput>(null);
  const navigation = useHookNavigation();
  const route = useRoute<any>();

  const InputValid = InputCmdonChange(props.input.name || '', route);
  const secureTextEntryCmd = InputCmdonChange('secureTextEntry' || '', route);

  const value = InputValid.value;
  const error = InputValid.error;
  const valid = props.input.validVisible && InputValid.valid;
  const editable = props.input.editable && InputValid.editable;

  useFocusEffect(
    React.useCallback(() => {
      navigation.setParams(
        secureTextEntryCmd.onChangeText({ value: props.input.secureTextEntry || false })
      );
    }, [props.input.secureTextEntry])
  );

  const handleBlur = () => {
    setFocus(false);
    props.input?.onBlur && props.input?.onBlur();
    navigation.setParams(InputValid.onBlur());
  };

  const handleOnChangeText = React.useCallback(
    (value: string) => {
      setFocus(true);
      let dataParams = InputValid.onChangeText({ value });
      navigation.setParams(dataParams);
    },
    [route]
  );

  const handlePressIn = () => {
    refInput.current?.focus();
    navigation.setParams(InputValid.onFocus());
    props.input?.onFocus && props.input?.onFocus();
    setFocus(true);
  };

  return (
    <View style={{}}>
      <View style={[props.viewStyle, { marginBottom: Units.s10 }]}>
        {props.helperBtn && (
          <View style={[{ top: -Units.s2 }, styles.blockHelperBtn]}>
            <TouchableOpacity {...props?.action?.handleHelperBtn} style={{ flex: 1 }}>
              <HaqqexText
                typography='text14'
                weight='400'
                color={colorsHaqqex.LIGHT6}
                {...props.helperBtn.data.style}
              >
                {props.helperBtn.data.text}
              </HaqqexText>
            </TouchableOpacity>
          </View>
        )}
        {props?.placeholder?.placeholderName && (
          <>
            <HaqqexText
              color={colorsHaqqex.LIGHT1}
              typography='text14'
              textAlign='left'
              weight='400'
              {...props.placeholder?.text}
            >
              {props.placeholder.placeholderName}
            </HaqqexText>
            <Stack size='s8' />
          </>
        )}
        <View style={{ position: 'relative' }}>
          <TextInput
            ref={refInput}
            {...props.input}
            {...props.action}
            value={value}
            testID={props.input.name}
            autoCorrect={false}
            onPressIn={handlePressIn}
            onBlur={handleBlur}
            keyboardAppearance={'dark'}
            onChangeText={handleOnChangeText}
            onSubmitEditing={handleBlur}
            secureTextEntry={secureTextEntryCmd.value || false}
            editable={editable}
            placeholderTextColor={colorsHaqqex.DARK1}
            style={[
              styles.defaultInputStyle,
              { borderWidth: 1, borderColor: focus ? colorsHaqqex.LIGHT6 : colorsHaqqex.DARK3 },
              props.input.style,
              error && styles.errorInput,
              valid && styles.validInput,
            ]}
          />
          <View style={styles.addonBtn}>
            {valid && (
              <TouchableOpacity
                disabled
                style={[
                  styles.succcessBlock,
                  props.input.secureTextEntry && styles.successAddonBlock,
                ]}
              >
                <SvgXml xml={successInputSvg} width={Units.s22} height={Units.s22} />
              </TouchableOpacity>
            )}
            {props.input.secureTextEntry && (
              <TouchableOpacity
                onPress={() =>
                  navigation.setParams(
                    secureTextEntryCmd.onChangeText({ value: !secureTextEntryCmd.value })
                  )
                }
                style={styles.secureTextEntryPosition}
              >
                <SvgXml
                  xml={secureTextEntryCmd.value ? clearShowInputSvg : clearInputSvg}
                  width={Units.s24}
                  height={Units.s24}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: Units.s4 }}
        >
          {props.childrenAddon?.visible ? props.childrenAddon.component() : <View />}
          <View>
            {typeof error === 'string' && error && (
              <>
                <HaqqexText
                  typography='text14'
                  color={colorsHaqqex.ERROR4}
                  textAlign='right'
                  weight='500'
                  {...props?.error?.text}
                >
                  {error}
                </HaqqexText>
              </>
            )}
            {typeof valid === 'string' && valid && (
              <>
                <HaqqexText
                  typography='text14'
                  color={colorsHaqqex.SUCCESS4}
                  textAlign='right'
                  weight='500'
                  {...props?.error?.text}
                >
                  {valid}
                </HaqqexText>
              </>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(HaqqexInput);

const styles = StyleSheet.create({
  blockHelperBtn: {
    position: 'absolute',
    right: 0,
    paddingVertical: Units.s2,
    paddingHorizontal: Units.s4,
    zIndex: 1000,
  },
  successAddonBlock: { right: Units.s4 },
  succcessBlock: {
    minHeight: Units.s52,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Units.s12,
    backgroundColor: colorsHaqqex.TRANSPARENT,
  },
  addonBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  validInput: {
    borderWidth: 1,
    borderColor: colorsHaqqex.DARK2,
  },
  errorInput: {
    borderWidth: 1,
    borderColor: colorsHaqqex.ERROR_INPUT,
  },
  defaultInputStyle: {
    paddingHorizontal: Units.s12,
    minHeight: Units.s52,
    borderRadius: Units.s12,
    backgroundColor: colorsHaqqex.DARK5,
    color: colorsHaqqex.LIGHT1,
    fontSize: Units.s16,
    fontWeight: '400',
  },
  secureTextEntryPosition: {
    minHeight: Units.s52,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Units.s12,
    backgroundColor: colorsHaqqex.TRANSPARENT,
  },
});
