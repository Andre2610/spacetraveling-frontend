import React, { useState } from "react";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";

export default function SelectDestinationForm() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const dispatch = useDispatch();

  function submitHandler(event) {
    event.preventDefault();
    console.log("Clicked");
    console.log("whats my origin", origin);
    console.log("whats my destination", destination);
  }

  console.log("WHAT IS THIS?", origin);

  return (
    <>
      <Form>
        <Form.Group controlId='controlSelectOrigin'>
          <Form.Label>Origin</Form.Label>
          <Form.Control as='select' onChange={(e) => setOrigin(e.target.value)}>
            <option value={"insert planet here!"}>some code 1</option>
            <option value={origin}>some code 2</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Destination</Form.Label>
          <Form.Control as='select'>
            <option>some code2</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Button variant='primary' type='submit' onClick={submitHandler}>
        Submit
      </Button>
    </>
  );
}
