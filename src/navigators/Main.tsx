import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '@screens/Home';

export type MainParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<MainParamList>();

const MainNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
