import { createGlobalStyle } from "styled-components";

// if adding to here refresh localStorage
const initialTheme = {
  mode: "light",
  darkModeColor: "black",
  lightModeColor: "rgb(254, 249, 231) !important",
  borderDarkMode: "1px solid rgb(254, 249, 231)",
  borderLightMode: "1px solid black",
  inputDarkMode: "lightgray",
  inputLightMode: "aliceblue",
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
    .searchBarContainer {
      background-color:  ${(props) =>
        props.theme.mode == "dark"
          ? props.theme.inputDarkMode
          : props.theme.inputLightMode};
    }
    
  `;

export { initialTheme, GlobalStyle };
