import axios from "axios";
import { URL } from "../../Config/constants";

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
      const res = await axios.get(`${URL}/trips`);
      console.log("What my info", res.data);
      dispatch(fetchedAllTrips(res.data));
    } catch (e) {
      console.log(e);
    }
  };
}
