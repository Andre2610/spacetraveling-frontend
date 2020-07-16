import axios from "axios";
import { URL } from "../../Config/constants";

export function Payment(id, amount) {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${URL}/booking/charge`, {
        id,
        amount,
      });
    } catch (e) {
      console.log(e);
    }
  };
}
