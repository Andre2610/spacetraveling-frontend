import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../Store/user/actions";

export default function SingUp(props) {
  const { handleClose, set_modalForm } = props;
  const dispatch = useDispatch();
  const initialState = { firstName: "", lastName: "", email: "", password: "" };
  const [signUpcredentials, set_signUpcredentials] = useState(initialState);

  function submitForm(event) {
    event.preventDefault();
    dispatch(signUp(signUpcredentials));

    set_signUpcredentials(initialState);
  }

  return (
    <div>
      <form>
        <div>
          <input
            value={signUpcredentials.firstName}
            onChange={(event) =>
              set_signUpcredentials({
                ...signUpcredentials,
                firstName: event.target.value,
              })
            }
            type="text"
            placeholder="please enter your first name"
            required
          />
          <input
            value={signUpcredentials.lastName}
            onChange={(event) =>
              set_signUpcredentials({
                ...signUpcredentials,
                lastName: event.target.value,
              })
            }
            type="text"
            placeholder="please enter your last name"
            required
          />
          <input
            value={signUpcredentials.email}
            onChange={(event) =>
              set_signUpcredentials({
                ...signUpcredentials,
                email: event.target.value,
              })
            }
            type="email"
            placeholder="please enter your email"
            required
          />
          <input
            value={signUpcredentials.password}
            onChange={(event) =>
              set_signUpcredentials({
                ...signUpcredentials,
                password: event.target.value,
              })
            }
            type="password"
            required
          />
          <button type="submit" onClick={submitForm}>
            Sign Up
          </button>
        </div>
      </form>
      <p>
        Don't have an account yet? Sign up{" "}
        <span
          onClick={(e) => set_modalForm("Login")}
          style={{ cursor: "pointer" }}
          color="blue.500"
        >
          HERE
        </span>
      </p>
    </div>
  );
}
