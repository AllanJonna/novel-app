import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApplicationProvider} from '@ui-kitten/components';
import {light as lightTheme, mapping} from '@eva-design/eva';

import MainNavigator from '@navigators/Main';

import * as appTheme from 'assets/custom-theme.json';

const strictTheme = {'text-font-family': 'Noto Sans'};
export const customMapping = {
  ...mapping,
  strict: {...mapping.strict, ...strictTheme},
};
export const theme = {...lightTheme, ...appTheme};

const App = (): React.ReactElement => {
  return (
    <ApplicationProvider mapping={customMapping} theme={theme}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
