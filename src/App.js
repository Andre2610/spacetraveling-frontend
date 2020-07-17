import React, { useState, useEffect } from "react";
import { selectAppLoading } from "./Store/appState/selector";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithStoredToken } from "./Store/user/actions";
import Message from "./Components/appState/Message";
import Loading from "./Components/appState/Loading";
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
  const isLoading = useSelector(selectAppLoading);
  const [darkMode, set_darkMode] = useState(false);

  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        light: "#DB6666",
        main: "#AA0D00",
        dark: "#242424", // button hovering color when in dark
      },
      secondary: {
        light: "#474747",
        main: "#B0B0B0",
        dark: "#CBCACA",
      },
      selectBackground: { light: "#FF6F00", main: "#424242", dark: "#FFD54F" },
      selectMenu: { light: "#FF6F00", main: "#546E7A", dark: "#FFD54F" },
      type: "dark",
      background: { paper: "#212121" },
      breakpoint: {
        values: {
          xxl: "100vw",
        },
      },
    },
    overrides: {
      MuiLink: {
        root: {
          "&:hover": { textDecoration: "none" },
        },
      },
      MuiButton: {
        root: {
          "&:hover": {
            color: "white",
            backgroundColor: "#ffa000",
          },
        },
      },
    },
    props: {
      MuiTextField: {
        variant: "outlined",
        margin: "normal",
      },
      MuiButton: {
        variant: "contained",
      },
    },
  });

  const lightTheme = createMuiTheme({
    palette: {
      primary: {
        light: "#DB6666",
        main: "#AA0D00",
        dark: "#890000", // button hovering color in light mode
      },
      secondary: {
        light: "#474747",
        main: "#B0B0B0",
        dark: "#CBCACA",
      },
      selectBackground: { light: "#FF6F00", main: "#FFA000", dark: "#FFD54F" },
      selectMenu: { light: "#FF6F00", main: "#EEEEEE", dark: "#FFD54F" },
      type: "light",
    },
    breakpoint: {
      values: {
        xxl: "100vw",
      },
    },
    overrides: {
      MuiLink: {
        root: {
          "&:hover": { textDecoration: "none" },
        },
      },
      MuiButton: {
        root: {
          "&:hover": {
            color: "white",
            backgroundColor: "#ffa000",
          },
        },
        // uncomment textTransform if you want buttons to not be uppercased
        // contained: { textTransform: "none", textDecorationColor: "none" },
      },
    },
    props: {
      MuiTextField: {
        variant: "outlined",
        margin: "normal",
      },
      MuiButton: {
        variant: "contained",
      },
    },
  });
  console.log("my theme", darkTheme);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [darkMode]);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper>
        <Container disableGutters={true} maxWidth="xxl">
          <CssBaseline />
          <Navbar darkMode={darkMode} set_darkMode={set_darkMode} />
          <Message />
          {isLoading ? <Loading open={isLoading} /> : null}
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
