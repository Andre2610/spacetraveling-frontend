import axios from "axios";
import { URL } from "../../Config/constants";
import {
  showMessageWithTimeout,
  appDoneLoading,
  appLoading,
} from "../appState/actions";

export function Payment(id, amount) {
  return async (dispatch, getState) => {
    try {
      dispatch(appLoading());
      const response = await axios.post(`${URL}/booking/charge`, {
        id,
        amount,
      });
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error);
      dispatch(showMessageWithTimeout("error", true, error.message, 4000));
    }
  };
}
