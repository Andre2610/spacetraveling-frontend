import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Components/UI/Navigation";
import Footer from "./Components/Footer/";
import Homepage from "./Pages/Homepage";
import Booking from "./Pages/Booking";

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
