import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Image from "../../../Images/cme.gif";
import "./Weather.css";
export default function Weather(props) {
  const { startTime, note, sourceLocation, link } = props.objectToShow;
  return (
    <div className="WeatherContainer">
      <Card>
        <Card.Img variant="top" src={Image} />
        <Card.Body>
          <Card.Title>Weather</Card.Title>
          <Card.Text>{note}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Start Time: {startTime}</ListGroupItem>
          <ListGroupItem>Source Location: {sourceLocation}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href={link}>More info</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
