import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

export default function SelectDestinationForm() {
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();

  function submitHandler(event) {
    event.preventDefault();
    console.log("Clicked");
    console.log("whats my origin", origin);
    console.log("whats my destination", destination);
  }

  return (
    <>
      <form>
        <label>Origin</label>
        <select>
          <option value={origin} onChange={setOrigin}>
            hardcodeOrigin1
          </option>
        </select>
        <label>Destination</label>
        <select value={destination} onChange={setDestination}>
          <option>Destination2</option>
        </select>
      </form>
      <button type='submit' onClick={submitHandler}>
        Submit
      </button>
    </>
  );
}
