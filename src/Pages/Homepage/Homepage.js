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
import Image from "../../Images/banner.svg";

export default function Homepage() {
  const dispatch = useDispatch();
  const planetData = useSelector(selectPlanet);

  useEffect(() => {
    dispatch(getCME());
    dispatch(getPlanetInfo());
  }, [dispatch]);

  console.log("Correct Data?", planetData);

  const cmi = useSelector(selectCoronalMassInjection);
  const planetDataTest = [
    {
      key: 0,
      id: 0,
      name: "Test Planet",
      distance: 1000000,
      imageUrl:
        "https://www.popsci.com/resizer/WsYKweCWKvQec1WYoOSuYxWXyC0=/525x525/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/LP5TMWXTF6VV6VQ6YDQGZ3YLQQ.jpg",
    },
    {
      key: 1,
      id: 1,
      name: "Test Planet",
      distance: 1000000,
      imageUrl:
        "https://www.popsci.com/resizer/WsYKweCWKvQec1WYoOSuYxWXyC0=/525x525/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/LP5TMWXTF6VV6VQ6YDQGZ3YLQQ.jpg",
    },
    {
      key: 2,
      id: 2,
      name: "Test Planet",
      distance: 1000000,
      imageUrl:
        "https://www.popsci.com/resizer/WsYKweCWKvQec1WYoOSuYxWXyC0=/525x525/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/LP5TMWXTF6VV6VQ6YDQGZ3YLQQ.jpg",
    },
  ];
  return (
    <div>
      <Row className="bannerMod" noGutters={true}>
        <Col xs={12}>
          <img className="Rocket" src={Image} alt="rocket" />
        </Col>
      </Row>
      <Container>
        <Row noGutters={true}>
          <Col className="d-none d-sm-block" sm={2}></Col>
          <Col xs={12} sm={8}>
            <Col xs={12} style={{ padding: "5vh" }}>
              <PlanetForm />

              <Link to="/booking">
                <Button>Book here</Button>
              </Link>
            </Col>
            <Row noGutters={true}>
              <Col xs={12} sm={8}>
                <PlanetCarousel planetsToShow={planetDataTest} />
              </Col>

              <Col xs={12} sm={4} style={{ border: "1px solid yellow" }}>
                {/* <Weather objectToShow={cmi} /> */}
              </Col>
            </Row>
          </Col>
          <Col className="d-none d-sm-block" sm={2}></Col>
        </Row>
      </Container>
    </div>
  );
}
