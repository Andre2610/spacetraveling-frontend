import React from "react";
import { Row, Col } from "react-bootstrap";
import PlanetForm from "../../Components/UI/PlanetForm";

export default function Footer() {
  return (
    <div>
      <Row noGutters={true}>
        <Col xs={4} style={{ border: "1px solid blue" }}>
          LOGO
        </Col>
        <Col xs={4} style={{ border: "1px solid blue" }}>
          ABOUT US?
        </Col>
        <Col xs={4} style={{ border: "1px solid blue" }}>
          CONTACT
        </Col>
      </Row>
    </div>
  );
}
