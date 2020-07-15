import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Components/UI/Navigation";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Pages/Homepage/Homepage";
import Booking from "./Pages/Booking/Booking";
import CoronalMassInjection from "./Components/APIs/SpaceWeather/CoronalMassInjection";
import SolarFlares from "./Components/APIs/SpaceWeather/SolarFlares";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Navigation />
      </div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/booking" component={Booking} />
      </Switch>
      <div className="Footer"></div>
      <Footer />
    </div>
  );
}

export default App;
