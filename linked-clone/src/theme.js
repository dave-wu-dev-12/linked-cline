import { createGlobalStyle } from "styled-components";

// if adding to here refresh localStorage
const initialTheme = {
  mode: "light",
  darkModeColor: "black",
  lightModeColor: "rgb(254, 249, 231) !important",
  headerLightModeColor: "white",
  headerDarkModeColor: "black",
  borderDarkMode: "1px solid rgb(254, 249, 231)",
  borderLightMode: "1px solid lightgray",
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
    }
    .headerContainer {
      border-bottom: ${(props) =>
        props.theme.mode == "dark"
          ? props.theme.borderDarkMode
          : props.theme.borderLightMode};
       background-color:  ${(props) =>
         props.theme.mode == "dark"
           ? props.theme.headerDarkModeColor
           : props.theme.headerLightModeColor};

    }
    .searchBarContainer {
      background-color:  ${(props) =>
        props.theme.mode == "dark"
          ? props.theme.inputDarkMode
          : props.theme.inputLightMode};
    }
    .userDropdownContainer{
      background-color:  ${(props) =>
        props.theme.mode == "dark"
          ? props.theme.headerDarkModeColor
          : props.theme.headerLightModeColor};
      border: ${(props) =>
        props.theme.mode == "dark"
          ? props.theme.borderDarkMode
          : props.theme.borderLightMode};
    }

    .productMenuContainer {
      background-color:  ${(props) =>
        props.theme.mode == "dark"
          ? props.theme.darkModeColor
          : props.theme.headerLightModeColor};
    }

    .overlay {
      background-color:  ${(props) =>
        props.theme.mode == "dark"
          ? props.theme.headerLightModeColor
          : props.theme.headerDarkModeColor};
    }
    
  `;

export { initialTheme, GlobalStyle };
