import React from "react";
import "./App.css";
import SingUp from "./Components/Auth/SingUp";
import CoronalMassInjection from "./Components/APIs/SpaceWeather/CoronalMassInjection";

function App() {
  return (
    <div className='App'>
      <SingUp />
      <CoronalMassInjection />
    </div>
  );
}

export default App;
