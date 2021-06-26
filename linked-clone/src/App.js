import "./App.css";
import storage from "local-storage-fallback";
import { useState } from "react";
import * as themes from "./theme";
import { ThemeProvider } from "styled-components";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Feed from "./Feed/Feed";

function App() {
  const getInitialTheme = () => {
    let storageTheme = storage.getItem("appTheme");
    return storageTheme ? JSON.parse(storageTheme) : themes.initialTheme;
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
      <themes.GlobalStyle />
      <div className="App">
        <button onClick={() => setAppTheme()} className="themeToggleButton">
          Switch to {theme.mode == "dark" ? "light" : "dark"} mode
        </button>
        <Header></Header>
        <div className="bodyContentContainer">
          <h4>This is space for an Ad</h4>
          <div className="profileContentContainer">
            <SideBar></SideBar>
            <Feed></Feed>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
