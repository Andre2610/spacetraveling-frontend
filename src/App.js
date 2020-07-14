import React, { useEffect } from "react";
import "./App.css";
import CoronalMassInjection from "./Components/APIs/SpaceWeather/CoronalMassInjection";
import SolarFlares from "./Components/APIs/SpaceWeather/SolarFlares";
import AuthModal from "./Components/Auth/AuthModal";
import SelectDestinationForm from "./Components/selectorForm";
import { useDispatch } from "react-redux";

function App() {
  return (
    <div className='App'>
      <AuthModal />
      <SelectDestinationForm />
    </div>
  );
}

export default App;
