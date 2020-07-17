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
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";

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
            <a className="GitLink" href="#">
              <li>
                <PhoneIcon /> via Phone
              </li>
            </a>
            <a className="GitLink" href="#">
              <li>
                <FacebookIcon /> 24/7 via Facebook
              </li>
            </a>
            <a className="GitLink" href="#">
              <li>
                <TwitterIcon /> 24/7 via Twitter
              </li>
            </a>
            <li>
              <a
                className="GitLink"
                href="https://github.com/Andre2610/spacetraveling-frontend">
                <GitHubIcon /> Check our Repository
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={4} className="AboutCol">
          <h5>About Space Travel Inc.</h5>
          <ul>
            <a className="GitLink" href="#">
              <li>
                <BusinessIcon /> Corporate
              </li>
            </a>
            <a className="GitLink" href="#">
              <li>
                <WorkIcon /> Careers
              </li>
            </a>
            <a className="GitLink" href="#">
              <li>
                <WarningIcon /> Disclaimers
              </li>
            </a>
          </ul>
        </Col>
      </Row>
    </div>
  );
}
