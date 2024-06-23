import * as R from 'ramda';
import { CONFIG_CTX, TConfig } from './config.section';
import { TQ } from './config.list';

type TDATA = { q: TQ } & TConfig;

export const DATA = R.keys(CONFIG_CTX).map((x: TQ) => ({
  title: '',
  data: [
    {
      ...(CONFIG_CTX[x] as unknown as TDATA),
      q: x,
    },
  ],
})) as Array<{ title: string; data: TDATA[] }>;
