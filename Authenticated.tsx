import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { Home } from 'src/screens';

import { theme } from 'src/theme';

const ScreenOptions = () => ({
  cardStyle: { backgroundColor: theme.colors.secondary, paddingHorizontal: 16 },
  headerShown: false
});

const Authenticated: FC = () => (
  <Navigator screenOptions={ScreenOptions}>
    <Screen name='Home' component={Home} />
  </Navigator>
);

export default Authenticated;
