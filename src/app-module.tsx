import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme, ExtendedTheme } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import { AppProviders, useUser } from 'src/context';

import { theme } from 'src/theme';

import Authenticated from '../Authenticated';
import UnauthenticatedApp from '../Unauthenticated';

if (__DEV__) {
  import('../ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App: FC = () => {
  const { isFetchingUser, user } = useUser();

  const MyTheme: ExtendedTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...theme.colors
    }
  };

  console.log('user', user);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        {user ? <Authenticated /> : <UnauthenticatedApp />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <AppProviders>
      <StatusBar backgroundColor={theme.colors.secondary} barStyle='dark-content' />

      <App />
    </AppProviders>
  </ThemeProvider>
);
