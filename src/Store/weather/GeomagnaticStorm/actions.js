import axios from 'axios';

import { NASA_GST_URL, NASAK } from '../../../Config/constants';

export const GST_FETCH_SUCCESS = 'GST_FETCH_SUCCESS';

export function FetchedGSTSuccess(data) {
  return {
    type: GST_FETCH_SUCCESS,
    payload: data,
  };
}

export function getGST() {
  return async (dispatch, getState) => {
    try {
      const res = await axios.get(`${NASA_GST_URL}&api_key=${NASAK}`);
      dispatch(FetchedGSTSuccess(res.data));
    } catch (e) {
      console.log('error message:', e);
    }
  };
}
