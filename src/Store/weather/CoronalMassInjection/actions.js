import axios from "axios";
import { NASA_CME_URL, NASAK } from "../../../Config/constants";

export const FETCHED_CME_INFO = "FETCHED_CME_INFO";

export function fetchedCMEInfo(data) {
  return {
    type: FETCHED_CME_INFO,
    payload: data,
  };
}

export function getCME() {
  return async (dispatch, getState) => {
    try {
      const res = await axios.get(`${NASA_CME_URL}&api_key=${NASAK}`);
      //   console.log("whats the result?", res.data);
      dispatch(fetchedCMEInfo(res.data));
    } catch (e) {
      console.log(e);
    }
  };
}
