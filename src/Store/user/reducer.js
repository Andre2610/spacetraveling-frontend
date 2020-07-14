import { LOGIN_SUCCESS, TOKEN_STILL_VALID, LOG_OUT } from "./actions";

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
    case TOKEN_STILL_VALID:
      return { ...state, ...payload };
    default:
      return state;
  }
};
