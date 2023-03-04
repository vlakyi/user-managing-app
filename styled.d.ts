import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    danger: {
      main: string;
    };
    neutral: {
      main: string;
    };
  }
}
