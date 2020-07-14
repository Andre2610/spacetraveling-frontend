import { LOGIN_SUCCESS } from "./actions";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  token: localStorage.getItem("token"),
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return { ...state, ...payload };

    default:
      return state;
  }
};
