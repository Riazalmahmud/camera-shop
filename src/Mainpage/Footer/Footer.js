import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Subscribe from "../../Sharepage/Subscribe/Subscribe.js";
import { BsFacebook } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <Subscribe></Subscribe>

      <div className="footer-section pt-5">
        <p className="fw-bold pt-5">
          Pellentesque congue non augue vitae pellentesque. Morbi sollicitudin
          eleifend rhoncus. <br /> Mauris vel nisl a massa viverra sollicitudin
          semper a diam.
        </p>

        <div className="container">
          <>
            <Navbar variant="dark">
              <Container>
                <Navbar.Brand href="#home">
                  {/* <img className="img-fulid" src={brand} alt="" width={"200px"} /> */}
                </Navbar.Brand>
                <Nav className="navbar-nav footer-social">
                  <Nav.Link as={Link} to="/home">
                    <BsFacebook size={"25px"} color={"#85C226"} />
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    <GrLinkedin size={"25px"} color={"#85C226"} />
                  </Nav.Link>
                  <Nav.Link as={Link} to="/shop">
                    <AiFillTwitterSquare size={"25px"} color={"#85C226"} />
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    <BsInstagram size={"25px"} color={"#85C226"} />
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </>
        </div>

        <div className="container">
          <footer>
            <p className="copy-right fw-bold text-white py-5 fast-color">
              Copyright &copy; {new Date().getFullYear()} Riazhossen.com
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
