import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function Homepage() {
  return (
    <div>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Where do you want to go?</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              {/* Planet.map() */}
            </Form.Control>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}
