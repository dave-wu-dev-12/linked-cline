import { createGlobalStyle } from "styled-components";

const initialTheme = {
  mode: "light",
  darkModeColor: "black",
  lightModeColor: "rgb(254, 249, 231)",
};

const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${(props) =>
        props.theme.mode == "dark"
          ? props.theme.darkModeColor
          : props.theme.lightModeColor};
      color:${(props) =>
        props.theme.mode == "dark"
          ? props.theme.lightModeColor
          : props.theme.darkModeColor};
        transition:  all ease-in .50s;
    }
  `;

export { initialTheme, GlobalStyle };
