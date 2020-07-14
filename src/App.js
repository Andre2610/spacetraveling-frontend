import React from "react";
import "./App.css";
import SingUp from "./Components/Auth/SingUp";
import CoronalMassInjection from "./Components/APIs/SpaceWeather/CoronalMassInjection";
import SolarFlares from "./Components/APIs/SpaceWeather/SolarFlares";
import GeomagnaticStorm from "./Components/APIs/SpaceWeather/GeomagnaticStorm";

function App() {
  return (
    <div className='App'>
      <GeomagnaticStorm />
    </div>
  );
}

export default App;
