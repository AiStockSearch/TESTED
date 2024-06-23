import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import * as R from 'ramda';
import { Linking } from 'react-native';

export const useHookNavigation = () => {
  const navigation = useNavigation();
  let route = {};
  try {
    route = useRoute();
  } catch (e) {
    route = {};
  }
  const paramsRoute = R.pipe(R.path(['params']), R.defaultTo({}))(route) as any;

  return {
    linkedPropsLink: (props: { url: string }) => () => {
      Linking.openURL(props.url);
    },
    openModal: (e:any, params?: any) => {
      navigation.dispatch(
        CommonActions.setParams({ ...paramsRoute, modal: e, modalDetail: params || {} })
      );
    },
    closeModal: () => {
      navigation.dispatch(
        CommonActions.setParams({ ...paramsRoute, modal: null, modalDetail: {} })
      );
    },
    navigate: (routeName: string, withRoute?: boolean, customParams?: any) => () => {
      try {
        const params = withRoute ? R.mergeAll([paramsRoute, customParams || {}]) : {};
        return navigation.navigate(routeName, params);
      } catch (e) {
        return null;
      }
    },
    replace: (routeName: string, withRoute?: boolean, customParams?: any) => () => {
      try {
        const params = withRoute ? R.mergeAll([paramsRoute, customParams]) : {};
        return navigation.replace(routeName, params);
      } catch (e) {
        return null;
      }
    },
    dispatch: (routeName: string, withRoute?: boolean, customParams?: any) => () => {
      try {
        const params = withRoute ? R.mergeAll([paramsRoute, customParams]) : {};
        return navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: routeName, params }],
          })
        );
      } catch (e) {
        return null;
      }
    },
    goBack: () => {
      try {
        if (navigation.canGoBack()) {
          return navigation.goBack();
        }
        return;
      } catch (e) {
        return null;
      }
    },
    setParams: (value: any, withClose?: boolean) => {
      try {
        if (withClose) {
          value['modal'] = null;
        }
        navigation.dispatch(CommonActions.setParams(value));
      } catch (e) {
        return null;
      }
    },
    clearParams: () => {
      try {
        navigation.dispatch(
          CommonActions.setParams({
            modal: null,
          })
        );
      } catch (e) {
        return null;
      }
    },
  };
};
