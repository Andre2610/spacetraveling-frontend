import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Components/UI/Navigation";
import Navbar from "./Components/UI/Navigation/Navbar";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Pages/Homepage/Homepage";
import Booking from "./Pages/Booking/Booking";
import theme from "./Styles/customTheme";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import CoronalMassInjection from "./Components/APIs/SpaceWeather/CoronalMassInjection";
import SolarFlares from "./Components/APIs/SpaceWeather/SolarFlares";

function App() {
  const [darkMode, set_darkMode] = useState(false);
  const darkModeToggleTheme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters="true" maxWidth="100vw">
        <CssBaseline />
        <Navbar set_darkMode={set_darkMode} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/booking" component={Booking} />
        </Switch>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
