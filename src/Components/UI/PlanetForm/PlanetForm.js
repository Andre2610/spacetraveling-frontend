import React from "react";
import { Form, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./PlanetForm.css";

export default function Homepage() {
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
            <Link className="LinkContainer" to="/booking">
              <Button color="primary" variant="contained">
                Book here
              </Button>
            </Link>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}
