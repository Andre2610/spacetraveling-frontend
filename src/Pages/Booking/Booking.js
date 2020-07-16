import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTripsList } from "../../Store/trips/actions";
import { selectTrips } from "../../Store/trips/selectors";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import PlanetForm from "../../Components/UI/PlanetForm/PlanetForm";
import Triplist from "../../Components/Triplist/Triplist";

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
          <Col className="d-none d-sm-block" sm={2}></Col>
          <Col xs={12} sm={8}>
            <Col xs={12}>
              <PlanetForm />
            </Col>
            <Row noGutters={true}>
              <Col xs={12}>{trips[0] ? <Triplist trips={trips} /> : null}</Col>
            </Row>
          </Col>
          <Col className="d-none d-sm-block" sm={2}></Col>
        </Row>
      </Container>
    </div>
  );
}
