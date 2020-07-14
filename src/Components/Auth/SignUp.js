import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { signUp } from "../../Store/user/actions";

export default function SignUp() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();
    dispatch(signUp(firstName, lastName, email, password));

    setfirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <form>
        <div>
          <input
            value={firstName}
            onChange={(event) => setfirstName(event.target.value)}
            type="text"
            placeholder="please enter your first name"
            required
          />
          <input
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            type="text"
            placeholder="please enter your last name"
            required
          />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="please enter your email"
            required
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            required
          />
          <button type="submit"> Sign Up</button>
        </div>
      </form>
    </div>
  );
}
