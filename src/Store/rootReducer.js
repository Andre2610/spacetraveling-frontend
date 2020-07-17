import { combineReducers } from "redux";
import coronalMassInjection from "./weather/CoronalMassInjection/reducer";
import solarFlare from "./weather/SolarFlare/reducer";
import GeomagnaticStorm from "./weather/GeomagnaticStorm/reducer";
import user from "./user/reducer";
import planet from "./planet/reducer";
import trips from "./trips/reducer";
import appState from "./appState/reducer";

export default combineReducers({
  user,
  coronalMassInjection,
  solarFlare,
  GeomagnaticStorm,
  planet,
  trips,
  appState,
});
