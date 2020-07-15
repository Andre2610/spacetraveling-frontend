import React, { useEffect } from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import PlanetForm from "../../Components/UI/PlanetForm/PlanetForm";
import Weather from "../../Components/UI/Weather/Weather";
import PlanetCarousel from "../../Components/UI/PlanetCarousel/PlanetCarousel";
import Image from "../../Images/banner.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { selectCoronalMassInjection } from "../../Store/weather/CoronalMassInjection/selectors";
import { getCME } from "../../Store/weather/CoronalMassInjection/actions";

export default function Homepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCME());
  }, [dispatch]);

  const cmi = useSelector(selectCoronalMassInjection);

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
                <PlanetCarousel />
              </Col>
              <Col xs={12} sm={4} style={{ border: "1px solid yellow" }}>
                <Weather objectToShow={cmi} />
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
