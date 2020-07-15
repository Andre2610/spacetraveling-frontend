import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PlanetCarousel.css";

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
                src={planet.imageUrl}
                alt={planet.name}
              />
              <Carousel.Caption>
                <h3>{planet.name}</h3>
                <p>Only {planet.distance} Km away from Earth!</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
