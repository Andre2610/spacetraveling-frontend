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
import ImageRover from "../../Images/rover.svg";
import ImageAcc from "../../Images/accomodation.svg";
import ImageRent from "../../Images/rentarover.svg";

export default function Homepage() {
  const dispatch = useDispatch();
  const planetData = useSelector(selectPlanet);

  useEffect(() => {
    dispatch(getCME());
    dispatch(getPlanetInfo());
  }, [dispatch]);

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
            <PlanetForm planetData={planetData} show={true} />

            <Row noGutters={true}>
              <Col xs={12} sm={8}>
                <PlanetCarousel planetsToShow={planetData} />
                <Row noGutters={true}>
                  <Col xs={6}>
                    <img
                      className="Rentarover"
                      src={ImageRent}
                      alt="rentarover"
                    />
                  </Col>
                  <Col xs={6}>
                    <img
                      className="Accomodation"
                      src={ImageAcc}
                      alt="Accomodation"
                    />
                  </Col>
                </Row>
              </Col>

              <Col xs={12} sm={4}>
                <Weather objectToShow={cmi} />
              </Col>
            </Row>
          </Col>
          <Col className="d-none d-sm-block align-self-end" sm={2}>
            <img className="Rover" src={ImageRover} alt="rover" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
