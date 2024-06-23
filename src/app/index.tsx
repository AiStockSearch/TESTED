import { I18nProvider } from '@lingui/react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { colorsHaqqex } from '@src/constants';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { enableScreens } from 'react-native-screens';
import { useLocaleChange } from '@app/hooks/hooks.useLocaleChange';
import { NotifierWrapper } from 'react-native-notifier';
import Navigation from './navigation';

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: colorsHaqqex.DARK6,
    },
  };
  const { i18n } = useLocaleChange();

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={StyleSheet.absoluteFill}>
        <I18nProvider i18n={i18n}>
          <NotifierWrapper>
            <NavigationContainer theme={MyTheme}>
              <Navigation />
            </NavigationContainer>
          </NotifierWrapper>
        </I18nProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
