import axios from "axios";
import { NASA_GST_URL, NASAK } from "../../../Config/constants";

export const GST_FETCH_SUCCESS = "GST_FETCH_SUCCESS";

export function FetchedGSTSuccess(data) {
  return {
    type: GST_FETCH_SUCCESS,
    payload: data,
  };
}

export function getGST() {
  return async (dispatch, getState) => {
    // console.log("working?");
    try {
      const res = await axios.get(`${NASA_GST_URL}&api_key=${NASAK}`);
      console.log("Have data?", res.data);
      dispatch(FetchedGSTSuccess(res.data));
    } catch (e) {
      console.log("error message:", e);
    }
  };
}
