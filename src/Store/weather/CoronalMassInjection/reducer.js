import { FETCHED_CME_INFO } from "./actions";
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHED_CME_INFO:
      return { ...state, ...payload };

    default:
      return state;
  }
};
