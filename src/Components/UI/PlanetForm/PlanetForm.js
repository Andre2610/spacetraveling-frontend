import React from "react";
import { Form, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./PlanetForm.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  btn: {
    marginTop: "1vh",
    float: "right",
  },
}));

export default function PlanetForm() {
  const classes = useStyles();

  return (
    <div className="FormContainer">
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridDestination">
            <Form.Label className="LabelContainer">
              Where do you want to go?
            </Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              {/* Planet.map() */}
            </Form.Control>

            <Button
              className={classes.btn}
              component={Link}
              to="/booking"
              color="primary"
              variant="contained">
              Book here
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}
