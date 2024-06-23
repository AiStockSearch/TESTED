import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ExampleRoute } from './route/ExampleRoute';

export const StackNative = createStackNavigator();
export const HaqqexContext = React.createContext({});

const UnAuthScreen = () => {
  return (
    <>
      <StackNative.Navigator
        initialRouteName={"MAIN"}
        screenOptions={{ headerShown: false }}
        detachInactiveScreens
      >
        <StackNative.Screen name={'HOME'} component={ExampleRoute} />
      </StackNative.Navigator>
    </>
  );
};

const MainNavigationRoute = () => {
  return <UnAuthScreen />;
};

export default MainNavigationRoute;
