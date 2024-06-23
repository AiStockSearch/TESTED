/** @type {import('@lingui/conf').LinguiConfig} */
import { formatter } from '@lingui/format-json';

module.exports = {
  locales: ['en', 'pt', 'id', 'vi', 'ms', 'bn', 'pa', 'tr'],
  extractorParserOptions: {
    flow: true,
  },
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}/messages',
      include: ['src'],
    },
  ],
  format: formatter({ style: 'lingui' }),
};
