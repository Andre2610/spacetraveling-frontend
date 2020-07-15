import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import PlanetForm from "../../Components/UI/PlanetForm/PlanetForm";

export default function Homepage() {
  return (
    <div>
      <Container>
        <Row noGutters={true}>
          <Col
            className="d-none d-sm-block"
            sm={2}
            style={{ border: "1px solid red" }}></Col>
          <Col xs={12} sm={8} style={{ border: "1px solid red" }}>
            <Col xs={12} style={{ border: "1px solid red" }}>
              <PlanetForm />
            </Col>
            <Row noGutters={true}>
              <Col xs={12} style={{ border: "1px solid green" }}>
                TRIP OPTIONS Component
              </Col>
            </Row>
          </Col>
          <Col
            className="d-none d-sm-block"
            sm={2}
            style={{ border: "1px solid red" }}></Col>
        </Row>
      </Container>
    </div>
  );
}
