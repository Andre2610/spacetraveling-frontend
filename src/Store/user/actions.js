import axios from "axios";
import { URL } from "../../Config/constants";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const loginSuccess = (userWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

export const login = (credentials) => {
  return async (dispatch, getState) => {
    //   dispatch(appLoading());
    try {
      const res = await axios.post(`${URL}/auth/login`, {
        credentials,
      });

      dispatch(loginSuccess(res.data));
      console.log("my response", res.data);
      // dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      // dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        //   dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        //   dispatch(setMessage("danger", true, error.message));
      }
      // dispatch(appDoneLoading());
    }
  };
};

export function signUp(firstName, lastName, email, password) {}
