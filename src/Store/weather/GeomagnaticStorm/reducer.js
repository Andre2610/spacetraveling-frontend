import { GST_FETCH_SUCCESS } from "./actions";
const initialState = {
  gstID: null,
  startTime: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GST_FETCH_SUCCESS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
