import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function Homepage() {
  return (
    <div>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Origin</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              {/* Planet.map() */}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Destination</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              {/* Planet.map() */}
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
}
