import { colorsHaqqex } from '@src/constants';
import { Stack } from '@src/styles/Spacing';
import { HaqqexText } from '@src/styles/Typografy/HaqqexText';
import { Units } from '@src/styles/Units';
import React from 'react';
import { SectionList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default (props: {
  renderItem: any;
  title: string;
  data: any;
  rightBtn?: any;
  leftBtn?: any;
  ListFooterComponent?: any;
}) => {
  const insets = useSafeAreaInsets();
  const sectionListRef = React.useRef<any | null>(null);
  const ref = React.useRef<ReturnType<typeof setTimeout>|null>(null);
  const scrollToBottom = (e: number) => {
    ref.current && clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      e && sectionListRef?.current?.scrollToLocation({ animated: true, itemIndex: e });
    }, 1000);
  };

  return (
    <View
      style={[
        styles.blockView,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <Stack size='s10' />
      <HaqqexText
        color={colorsHaqqex.YELLOW4}
        typography={'text20'}
        weight={'700'}
        textAlign='center'
      >
        {props.title}
      </HaqqexText>
      <Stack size='s10' />
      <View style={{ flex: 1 }}>
        <SectionList
          bounces={false}
          ref={sectionListRef}
          ListHeaderComponent={() => <Stack size='s24' />}
          ListFooterComponent={props.ListFooterComponent}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: Units.s14,
            paddingBottom: insets.bottom,
          }}
          sections={props.data}
          renderItem={(element: any) => props.renderItem({ scrollToBottom, ...element })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blockView: {
    flex: 1,
    backgroundColor: colorsHaqqex.DARK6,
  },
  block: {
    flexDirection: 'row',
    height: Units.s52,
    backgroundColor: colorsHaqqex.DARK5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: Units.s12,
  },
});
