import { Units } from '@src/styles/Units';
import axios from 'axios';
import React from 'react';
import { View } from 'react-native';
import ENV from 'react-native-config';
import { SvgXml } from 'react-native-svg';

export const CDN = ENV.CDN_URL || 'https://d2l3mv1ukqn3bn.cloudfront.net';
export const getCoinIcon = async (shortname: string) => {
  try {
    const data = await axios.get(`${CDN}/coins/${shortname}.svg`);
    if (data.data) {
      return `${data?.data}`;
    }
    return ``;
  } catch (e) {
    return ``;
  }
};

const ImageCoinComponent = ({ coin, size }: { coin: string; size: number }) => {
  const [state, setState] = React.useState(``);

  React.useEffect(() => {
    const fetchIcon = async () => {
      coin && getCoinIcon(coin).then(setState);
    };
    fetchIcon();
  }, [coin]);

  return (
    <View style={{ width: size || Units.s32, height: size || Units.s32 }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {state.length > 2 && (
          <SvgXml xml={state} width={size || Units.s32} height={size || Units.s32} />
        )}
      </View>
    </View>
  );
};

export default React.memo(ImageCoinComponent);
