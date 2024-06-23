import React from 'react';
import * as R from 'ramda';
import { useRoute } from '@react-navigation/native';
import { useHookNavigation } from '@src/app/hooks/hooks.useNavigation';
import { DATA } from './section';
import { CURRENT_STATE, TQ } from './section/config.list';
import { Root_Navigation } from '@src/constants/Root_Navigation';
import { Alert } from 'react-native';
import { t } from '@lingui/macro';

export const useHookContext = () => {
  const navigation = useHookNavigation();
  const route = useRoute();
  const [state, setState] = React.useState<TQ>('q0');
  const [listRoute, setListRoute] = React.useState<Array<TQ>>(['q0']);

  const sectionData = React.useMemo(() => {
    return R.reverse(DATA);
  }, []);

  const handleNextStep = (currentState: string[], item: { q: string | number }) => () => {
    navigation.setParams(R.assocPath(['params', item.q], currentState)(route));
    let nextStep = R.path<TQ>([item.q, item.q])(CURRENT_STATE);
    currentState.forEach((step) => {
      nextStep = R.path<TQ>([item.q, step])(CURRENT_STATE);
    });
    setListRoute([...listRoute, nextStep] as Array<TQ>);
    setState(nextStep as TQ);
  };
  const incdadd = R.takeWhile((element) => element <= state, listRoute);
  const handleGoBack = () => {
    setListRoute(R.dropLast(1, listRoute));
    setState(incdadd[incdadd.length - 2]);
  };
  const handleOpenModal = () => {
    Alert.alert(t`Сейчас откроется список уточняющих статей`, '', [
      {
        text: t`Закрыть`,
        onPress: () => {
          null
        },
      }
    ]);
  };

  return {
    sectionData,
    handleNextStep,
    handleOpenModal,
    handleGoBack,
    state,
    listRoute,
    incdadd,
  };
};
