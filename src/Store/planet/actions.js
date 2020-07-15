import Axios from "axios";
import axios from "axios";
import { URL } from "../../Config/constants";

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
      const res = await Axios.get(`${URL}/planet`);
      console.log("What my info", res.data);
      dispatch(planetFetchSuccess(res.data));
    } catch (e) {
      console.log(e);
    }
  };
}
