import 'styled-components';

enum ThemeNames {
  MAIN_THEME = 'MAIN_THEME',
}

type Colors = {
  primary: string;
  primaryDark?: string;
  primaryLight?: string;
  onPrimaryLight?: string;
  secondary: string;
  secondaryDark?: string;
  secondaryLight?: string;
  background: string;
  surface: string;
  error: string;
  onPrimary: string;
  onPrimaryDark: string;
  onSecondary: string;
  onBackground: string;
  onSurface: string;
  onError: string;
  black: string;
  white: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
  }
}
