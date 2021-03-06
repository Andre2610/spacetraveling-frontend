import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PlanetCarousel.css";
import MercuryImg from "../../../Images/mercury.svg";
import JupiterImg from "../../../Images/jupiter.svg";
import MarsImg from "../../../Images/mars.svg";
import VenusImg from "../../../Images/venus.svg";
import SaturnImg from "../../../Images/saturn.svg";
import UranusImg from "../../../Images/uranus.svg";
import NeptuneImg from "../../../Images/neptune.svg";
import PlutoImg from "../../../Images/pluto.svg";

const PlanetsSvgs = [
  MercuryImg,
  VenusImg,
  MarsImg,
  JupiterImg,
  SaturnImg,
  UranusImg,
  NeptuneImg,
  PlutoImg,
];

export default function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="CarouselContainer">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {props.planetsToShow.map((planet, i) => (
          <Carousel.Item key={planet.name + planet.id}>
            <Link to="/booking">
              <img
                className="d-block w-100"
                src={PlanetsSvgs[planet.id - 1]}
                alt={planet.name}
              />
              <Carousel.Caption className="CaptionContainer">
                <h3>{planet.name}</h3>
                <p>{planet.description}</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
