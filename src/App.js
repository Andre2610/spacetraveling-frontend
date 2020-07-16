import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithStoredToken } from "./Store/user/actions";
import Yellow from "@material-ui/core/colors";
import Navbar from "./Components/UI/Navigation/Navbar";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Pages/Homepage/Homepage";
import Booking from "./Pages/Booking/Booking";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  Paper,
  createMuiTheme,
} from "@material-ui/core";
import CoronalMassInjection from "./Components/APIs/SpaceWeather/CoronalMassInjection";
import SolarFlares from "./Components/APIs/SpaceWeather/SolarFlares";

function App() {
  const dispatch = useDispatch();
  const [darkMode, set_darkMode] = useState(false);

  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        light: "#DB6666",
        main: "#AA0D00",
        dark: "#FF0000",
      },
      secondary: {
        light: "#1565C0",
        main: "#039BE5",
        dark: "#81D4FA",
      },
      selectBackground: { light: "#FF6F00", main: "#424242", dark: "#FFD54F" },
      selectMenu: { light: "#FF6F00", main: "#546E7A", dark: "#FFD54F" },
      type: "dark",
      background: { paper: "#212121" },
    },
  });

  const lightTheme = createMuiTheme({
    palette: {
      primary: {
        light: "#DB6666",
        main: "#AA0D00",
        dark: "#FF0000",
      },
      secondary: {
        light: "#B69BD2",
        main: "#9459D2",
        dark: "#7C00FF",
      },
      selectBackground: { light: "#FF6F00", main: "#FFA000", dark: "#FFD54F" },
      selectMenu: { light: "#FF6F00", main: "#EEEEEE", dark: "#FFD54F" },
      type: "light",
    },
  });
  console.log("my theme", darkTheme);
  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [darkMode]);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper>
        <Container disableGutters="true" maxWidth="100vw">
          <CssBaseline />
          <Navbar darkMode={darkMode} set_darkMode={set_darkMode} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/booking" component={Booking} />
          </Switch>
          <Footer />
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
