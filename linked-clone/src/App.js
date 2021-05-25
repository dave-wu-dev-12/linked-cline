import "./App.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import storage from "local-storage-fallback";
import { useState } from "react";

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
  }
`;

function App() {
  const getInitialTheme = () => {
    let storageTheme = storage.getItem("appTheme");
    return storageTheme ? JSON.parse(storageTheme) : initialTheme;
  };
  const [theme, setTheme] = useState(getInitialTheme);
  const setAppTheme = () => {
    let chosenTheme =
      theme.mode == "dark"
        ? { ...theme, mode: "light" }
        : { ...theme, mode: "dark" };

    storage.setItem("appTheme", JSON.stringify(chosenTheme));

    setTheme(chosenTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <h1 onClick={() => setAppTheme()}>Bust a gash</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
