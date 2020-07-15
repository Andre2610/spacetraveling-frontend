import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PlanetForm from "../../Components/UI/PlanetForm/PlanetForm";
import Weather from "../../Components/UI/Weather/Weather";
import PlanetCarousel from "../../Components/UI/PlanetCarousel/PlanetCarousel";
import { useDispatch, useSelector } from "react-redux";
import { selectCoronalMassInjection } from "../../Store/weather/CoronalMassInjection/selectors";
import { getCME } from "../../Store/weather/CoronalMassInjection/actions";
import { getPlanetInfo } from "../../Store/planet/actions";
import { selectPlanet } from "../../Store/planet/selectors";
import { Link } from "react-router-dom";
import "./Homepage.css";
import ImageRocket from "../../Images/banner.svg";
import ImageStewardess from "../../Images/stew.svg";

export default function Homepage() {
  const dispatch = useDispatch();
  const planetData = useSelector(selectPlanet);

  useEffect(() => {
    dispatch(getCME());
    dispatch(getPlanetInfo());
  }, [dispatch]);

  console.log("Correct Data?", planetData);

  const cmi = useSelector(selectCoronalMassInjection);

  return (
    <div>
      <Row className="bannerMod" noGutters={true}>
        <Col xs={12}>
          <img className="Rocket" src={ImageRocket} alt="rocket" />
        </Col>
      </Row>
      <Container>
        <Row noGutters={true}>
          <Col className="d-none d-sm-block align-self-end" sm={2}>
            <img
              className="Stewardess"
              src={ImageStewardess}
              alt="stewardess"
            />
          </Col>
          <Col xs={12} sm={8}>
            <Col xs={12} style={{ padding: "5vh" }}>
              <PlanetForm />

              <Link to="/booking">
                <Button>Book here</Button>
              </Link>
            </Col>
            <Row noGutters={true}>
              <Col xs={12} sm={8}>
                <PlanetCarousel planetsToShow={planetData} />
              </Col>

              <Col xs={12} sm={4}>
                <Weather objectToShow={cmi} />
              </Col>
            </Row>
          </Col>
          <Col className="d-none d-sm-block" sm={2}></Col>
        </Row>
      </Container>
    </div>
  );
}
