import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTripsList } from "../../Store/trips/actions";
import { selectTrips } from "../../Store/trips/selectors";
import { Container, Row, Col } from "react-bootstrap";
import PlanetForm from "../../Components/UI/PlanetForm/PlanetForm";
import Triplist from "../../Components/Triplist/Triplist";
import ImageSpacePerson from "../../Images/spaceperson.svg";
import ImageSpaceCol from "../../Images/spacecol.svg";
import "./Booking.css";

export default function Booking() {
  const dispatch = useDispatch();
  const trips = useSelector(selectTrips);

  useEffect(() => {
    dispatch(getTripsList());
  }, [dispatch]);
  return (
    <div>
      <Container>
        <Row noGutters={true}>
          <Col className="d-none d-sm-block" sm={2}>
            {" "}
            <img className="SpaceCol" src={ImageSpaceCol} alt="spaceCol" />
          </Col>
          <Col xs={12} sm={8}>
            <Col xs={12}>
              <PlanetForm />
            </Col>
            <Row noGutters={true}>
              <Col xs={12}>{trips[0] ? <Triplist trips={trips} /> : null}</Col>
            </Row>
          </Col>
          <Col className="d-none d-sm-block align-self-end" sm={2}>
            <img
              className="Spaceperson"
              src={ImageSpacePerson}
              alt="spaceperson"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
