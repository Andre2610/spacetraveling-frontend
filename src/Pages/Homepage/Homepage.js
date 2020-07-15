import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import PlanetForm from "../../Components/UI/PlanetForm/PlanetForm";
import Image from "../../Images/banner.jpeg";

export default function Homepage() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Travel to Space!</h1>
          <p>Visit the wonders of our Solar System!</p>
        </Container>
      </Jumbotron>
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
              <Col xs={12} sm={8} style={{ border: "1px solid green" }}>
                PLANET CARDS
              </Col>
              <Col xs={12} sm={4} style={{ border: "1px solid yellow" }}>
                WEATHER WIDGET
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
