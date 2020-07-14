import React from "react";
import "./App.css";
import SingUp from "./Components/Auth/SingUp";
import CoronalMassInjection from "./Components/APIs/SpaceWeather/CoronalMassInjection";
import SolarFlares from "./Components/APIs/SpaceWeather/SolarFlares";

function App() {
  return (
    <div className='App'>
      <SolarFlares />
    </div>
  );
}

export default App;
