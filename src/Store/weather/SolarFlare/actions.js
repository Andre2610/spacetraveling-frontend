import axios from 'axios';

import { NASAK, NASA_FLR_URL } from '../../../Config/constants';

export const FLR_FETCH_SUCCESS = 'FLR_FETCH_SUCCESS';

export function fetchedFLRsuccess(data) {
  return {
    type: FLR_FETCH_SUCCESS,
    payload: data,
  };
}

export function getFLR() {
  return async (dispatch, getState) => {
    try {
      const res = await axios.get(`${NASA_FLR_URL}&api_key=${NASAK}`);
      dispatch(fetchedFLRsuccess(res.data[0]));
    } catch (e) {
      console.log('ERROR MESSAGE:', e);
    }
  };
}
