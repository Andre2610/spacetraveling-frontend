import { combineReducers } from "redux";
import user from "./user/reducer"
import coronalMassInjection from "./weather/CoronalMassInjection/reducer"

export default combineReducers({
    user,
    coronalMassInjection
})