import { LOGIN_SUCCESS, TOKEN_STILL_VALID, LOG_OUT } from "./actions";

const initialState = {
  firstName: null,
  lastName: null,
  email: null,
  token: localStorage.getItem("token"),
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return { ...state, ...payload };
    case TOKEN_STILL_VALID:
      return { ...state, ...payload };
    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    default:
      return state;
  }
};
