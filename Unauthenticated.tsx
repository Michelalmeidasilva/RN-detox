import React, { FC } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

import { theme } from 'src/theme';
import { Login } from 'src/screens';

const UnauthenticatedApp: FC = (): JSX.Element => (
  <Navigator
    initialRouteName='Login'
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: theme.colors.secondary }
    }}
  >
    <Screen name='Login' component={Login} />
  </Navigator>
);

export default UnauthenticatedApp;
