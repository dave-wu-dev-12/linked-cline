import "./App.css";
import storage from "local-storage-fallback";
import { useEffect, useState } from "react";
import * as themes from "./theme";
import { ThemeProvider } from "styled-components";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Feed from "./Feed/Feed";
import axios from "axios";

function App() {
  const getInitialTheme = () => {
    let storageTheme = storage.getItem("appTheme");
    return storageTheme ? JSON.parse(storageTheme) : themes.initialTheme;
  };
  const [theme, setTheme] = useState(getInitialTheme);
  const [dummyState, setDummyState] = useState(false);

  const setAppTheme = () => {
    let chosenTheme =
      theme.mode == "dark"
        ? { ...theme, mode: "light" }
        : { ...theme, mode: "dark" };

    storage.setItem("appTheme", JSON.stringify(chosenTheme));

    setTheme(chosenTheme);

    // test
    setDummyState(!dummyState);
  };

  const [userData, setUserData] = useState([]);

  // only runs ONE time on component INITIAL load
  useEffect(() => {
    console.log("App useEffect for first render is ran");
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setUserData(res.data);

      //test
      setDummyState(!dummyState);
    });
  }, []);

  // only runs in a LOOP, due to use listening for a change, that we cause
  // in the useEffect
  /*   useEffect(() => {
    console.log("App useEffect for dependent render");
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setUserData(res.data);
    });
  }, [userData]); */

  // only runs ONE time on component INITIAL load and on every update to dep array item
  useEffect(() => {
    console.log("App useEffect for dependency change is ran");
  }, [dummyState]);

  // runs on initial load and then every re-render of this comp
  // which would include ANY state or prop change
  useEffect(() => {
    console.log("App useEffect for ANY render is ran");
  });

  return (
    <ThemeProvider theme={theme}>
      <themes.GlobalStyle />
      <div className="App">
        <button onClick={() => setAppTheme()} className="themeToggleButton">
          Switch to {theme.mode == "dark" ? "light" : "dark"} mode
        </button>
        <Header userData={userData}></Header>
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
