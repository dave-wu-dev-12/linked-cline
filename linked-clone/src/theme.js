import { createGlobalStyle } from "styled-components";

const initialTheme = {
  mode: "light",
  darkModeColor: "black",
  lightModeColor: "rgb(254, 249, 231) !important",
  borderDarkMode: "1px solid rgb(254, 249, 231)",
  borderLightMode: "1px solid black",
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
        transition:  all ease-in .75s;
    }
    .headerContainer {
      border-bottom: ${(props) =>
        props.theme.mode == "dark"
          ? props.theme.borderDarkMode
          : props.theme.borderLightMode};
    }
    
  `;

export { initialTheme, GlobalStyle };
