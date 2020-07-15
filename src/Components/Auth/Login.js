import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Store/user/actions";
import Button from "@material-ui/core/Button";

export default function Login(props) {
  const { handleClose, set_modalForm } = props;
  const dispatch = useDispatch();
  const initialState = { email: "", password: "" };
  const [credentials, set_credentials] = useState(initialState);

  function submitForm(event) {
    event.preventDefault();
    dispatch(login(credentials));

    set_credentials(initialState);
  }

  return (
    <div>
      <form>
        <div>
          <input
            value={credentials.email}
            onChange={(event) =>
              set_credentials({
                ...credentials,
                email: event.target.value,
              })
            }
            type="email"
            placeholder="Please enter your email"
            required
          />
          <input
            value={credentials.password}
            onChange={(event) =>
              set_credentials({
                ...credentials,
                password: event.target.value,
              })
            }
            type="password"
            placeholder="Please enter your password"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={submitForm}
          >
            Log in
          </Button>
        </div>
      </form>
      <p>
        Don't have an account yet? Sign up{" "}
        <span
          onClick={(e) => set_modalForm("Signup")}
          style={{ cursor: "pointer" }}
          color="blue.500"
        >
          HERE
        </span>
      </p>
    </div>
  );
}
