import { FETCH_ALL_TRIPS } from "./actions";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_TRIPS:
      return [...payload];

    default:
      return state;
  }
};
