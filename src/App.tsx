import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainNavigator from '@navigators/Main';

const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
