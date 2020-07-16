import React from "react";
import { Row, Col } from "react-bootstrap";
import LogoImg from "../../Images/logo.svg";
import "./Footer.css";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import WarningIcon from "@material-ui/icons/Warning";
import WorkIcon from "@material-ui/icons/Work";
import BusinessIcon from "@material-ui/icons/Business";

export default function Footer() {
  return (
    <div className="FooterContainer">
      <Row noGutters={true}>
        <Col xs={12} sm={4} className="LogoCol">
          <img className="Logo" src={LogoImg} alt="logo" />
        </Col>
        <Col xs={12} sm={4} className="ContactCol">
          <h5>Contact us</h5>
          <ul>
            <li>
              <PhoneIcon /> via Phone
            </li>
            <li>
              <FacebookIcon /> 24/7 via Facebook
            </li>
            <li>
              <TwitterIcon /> 24/7 via Twitter
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={4} className="AboutCol">
          <h5>About Space Travel Inc.</h5>
          <ul>
            <li>
              <BusinessIcon /> Corporate
            </li>
            <li>
              <WorkIcon /> Careers
            </li>
            <li>
              {" "}
              <WarningIcon /> Disclaimers
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}
