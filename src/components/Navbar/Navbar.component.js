import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo.svg";

const NavbarComp = () => {
  return (
    <div className={`${styles.nav} sticky-top`}>
      <Container>
        <Navbar variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} width="40" height="40" className="d-inline-block align-top" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto text-center">
                <Nav.Link href="#home" className="mx-2">
                  Home
                </Nav.Link>
                <Nav.Link href="#feature" className="mx-2">
                  Feature
                </Nav.Link>
                <Nav.Link href="#gallery" className="mx-2">
                  Gallery
                </Nav.Link>
                <Nav.Link href="#faq" className="mx-2">
                  FAQ
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavbarComp;
