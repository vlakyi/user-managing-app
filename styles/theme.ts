import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  primary: {
    light: "hsla(225, 78%, 36%, 0.2)",
    main: "hsl(225, 78%, 36%)",
    dark: "hsl(225, 78%, 27%)",
  },
  secondary: {
    light: "hsla(45, 92%, 43%, 0.2)",
    main: "hsl(45, 92%, 43%)",
    dark: "hsl(45, 100%, 33%)",
  },
  danger: {
    light: "hsla(353, 98%, 41%, 0.2)",
    main: "hsl(353, 98%, 41%)",
    dark: "hsl(351, 100%, 32%)",
  },
  neutral: {
    light: "hsla(0, 0%, 77%)",
    main: "hsl(0, 0%, 45%)",
    dark: "hsl(0, 0%, 35%)",
  },
  shadow: {
    main: "0 0 0.75rem 1px hsl(0, 0%, 61%)",
  },
  overlay: {
    main: "hsla(0, 0%, 0%, 0.3)",
  },
  background: {
    main: "hsl(0, 0%, 100%)",
  },
  text: {
    main: "hsl(0, 0%, 0%)",
    secondary: "hsl(0, 0%, 100%)",
  },
};

export { theme };
