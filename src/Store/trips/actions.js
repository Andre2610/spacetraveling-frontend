import axios from "axios";
import { URL } from "../../Config/constants";
import {
  showMessageWithTimeout,
  appDoneLoading,
  appLoading,
} from "../appState/actions";

export const FETCH_ALL_TRIPS = "FETCH_ALL_TRIPS";

export function fetchedAllTrips(data) {
  return {
    type: FETCH_ALL_TRIPS,
    payload: data,
  };
}

export function getTripsList() {
  return async (dispatch, getState) => {
    try {
      dispatch(appLoading());
      const res = await axios.get(`${URL}/trips`);
      dispatch(fetchedAllTrips(res.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error);
      dispatch(showMessageWithTimeout("error", true, error.message, 4000));
      dispatch(appDoneLoading());
    }
  };
}
