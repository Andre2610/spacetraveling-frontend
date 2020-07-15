import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PlanetCarousel(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <Link to="/booking">
          <img
            className="d-block w-100"
            src="https://eyes.jpl.nasa.gov/apps/orrery/photos/planets/jupiter.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}
