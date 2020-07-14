import { FLR_FETCH_SUCCESS } from "./actions";
const initialState = {
  classType: null,
  beginTime: null,
  peakTime: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FLR_FETCH_SUCCESS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
