import Axios from "axios";
import { URL } from "../../Config/constants";
import {
  showMessageWithTimeout,
  appDoneLoading,
  appLoading,
} from "../appState/actions";

export const FETCH_PLANET_INFO_SUCCESS = "FETCH_PLANET_INFO_SUCCESS";

export function planetFetchSuccess(data) {
  return {
    type: FETCH_PLANET_INFO_SUCCESS,
    payload: data,
  };
}

export function getPlanetInfo() {
  return async (dispatch, getState) => {
    try {
      dispatch(appLoading());
      const res = await Axios.get(`${URL}/planet`);
      dispatch(planetFetchSuccess(res.data));
    } catch (error) {
      console.log(error);
      dispatch(showMessageWithTimeout("error", true, error.message, 4000));
      dispatch(appDoneLoading());
    }
  };
}
