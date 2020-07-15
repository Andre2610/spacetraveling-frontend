import { FETCH_PLANET_INFO_SUCCESS } from "./actions";
const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PLANET_INFO_SUCCESS:
      return [...state, ...payload];

    default:
      return state;
  }
};
