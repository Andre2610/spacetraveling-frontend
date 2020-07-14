import { combineReducers } from "redux";
import user from "./user/reducer";
import coronalMassInjection from "./weather/CoronalMassInjection/reducer";
import solarFlare from "./weather/SolarFlare/reducer";
import GeomagnaticStorm from "./weather/GeomagnaticStorm/reducer";
import planet from "./planet/reducer";

export default combineReducers({
  user,
  coronalMassInjection,
  solarFlare,
  GeomagnaticStorm,
  planet,
});
