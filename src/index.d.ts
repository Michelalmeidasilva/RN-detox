import '@react-navigation/native';

// Override the theme in react native navigation to accept our custom theme props.
declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
      error: string;
      warning: string;
      success: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
      gray: {
        n50: string;
        n100: string;
        n200: string;
        n300: string;
        n400: string;
        n500: string;
        n600: string;
        n700: string;
        n800: string;
        n900: string;
      };
    };
  };
  export function useTheme(): ExtendedTheme;
}

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      error: string;
      warning: string;
      success: string;
      primary: string;
      secondary: string;
      gray: {
        n50: string;
        n100: string;
        n200: string;
        n300: string;
        n400: string;
        n500: string;
        n600: string;
        n700: string;
        n800: string;
        n900: string;
      };
    };
  }
}
