import { i18n } from '@lingui/core';
import React from 'react';
import { useMMKVString } from 'react-native-mmkv';
import { messages as messagesBn } from '../../locales/bn/messages';
import { messages as messagesEn } from '../../locales/en/messages';
import { messages as messagesId } from '../../locales/id/messages';
import { messages as messagesMs } from '../../locales/ms/messages';
import { messages as messagesPa } from '../../locales/pa/messages';
import { messages as messagesPt } from '../../locales/pt/messages';
import { messages as messagesTr } from '../../locales/tr/messages';
import { messages as messagesVi } from '../../locales/vi/messages';

const catalog = {
  English: messagesEn,
  Portuguese: messagesPt,
  Indonesian: messagesId,
  Vietnamese: messagesVi,
  Malay: messagesMs,
  Bangla: messagesBn,
  Hindi: messagesPa,
  Turkish: messagesTr,
};
i18n.load(catalog);

export const useLocaleChange = () => {
  const [locale, setLocale] = useMMKVString('locale');
  const textLocale = [
    'English',
    'Portuguese',
    'Indonesian',
    'Vietnamese',
    'Malay',
    'Bangla',
    'Hindi',
    'Turkish',
  ];

  const defaultLocale = textLocale[0];

  React.useEffect(() => {
    setLocale(locale || defaultLocale);
    i18n.activate(locale || defaultLocale);
  }, [locale]);

  return {
    locale: locale || defaultLocale,
    setLocale,
    currentLocale: locale || defaultLocale,
    textLocale,
    i18n,
  };
};
