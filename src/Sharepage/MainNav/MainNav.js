import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import brand from "../../image/brand/logo.png";
import { Link } from "react-router-dom";
import "./MainNav.css";
const MainNav = () => {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img className="img-fulid" src={brand} alt="" width={"200px"} />
            </Navbar.Brand>
            <Nav className="justify-content-end nav-style">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/shop">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                contact
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>

      <div className="slider"></div>
    </div>
  );
};

export default MainNav;
