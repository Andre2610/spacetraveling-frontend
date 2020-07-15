import React from "react";
import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import AuthModal from "../../Auth/AuthModal";
import Logout from "../../Auth/Logout";
import { selectToken, selectUser } from "../../../Store/user/selectors";
// import LogonFocus from "../../svg/nFocusLogoBar.svg";

export default function Navigation() {
  const token = useSelector(selectToken);

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        {/* <img src={LogonFocus} style={{ height: "40px" }} alt="logo" /> */}
        Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Placeholder" />
          {token ? <Logout /> : <AuthModal />}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
