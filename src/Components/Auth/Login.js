import React, { useState } from "react";

export default function Login() {
  const initialState = { email: "", password: "" };
  const [credentials, set_credentials] = useState({});

  function submitForm(event) {
    event.preventDefault();
    // dispatch(singUp(signUpcredentials));

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
            type="text"
            placeholder="please enter your first name"
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
            type="text"
            placeholder="please enter your last name"
            required
          />
          <button type="submit" onClick={submitForm}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
