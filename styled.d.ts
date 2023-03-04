import "styled-components";

declare module "styled-components" {
  interface ColorVariants {
    main: string;
    dark?: string;
    secondary?: string;
  }
  export interface DefaultTheme {
    primary: ColorVariants;
    secondary: ColorVariants;
    danger: ColorVariants;
    neutral: ColorVariants;
    shadow: ColorVariants;
    text: ColorVariants;
  }
}
