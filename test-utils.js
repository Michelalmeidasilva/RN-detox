import React, { ReactNode } from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import { theme } from 'src/theme';

const Providers = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui?: any, options?: any) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react-native';

export { customRender as render };
