import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./MenuTop.css";
export default function menuTop() {
  return (
    <>
      <Navbar className="menuTop" expand="lg">
        <Container className="cv-menu-pepe">
          <Navbar.Brand>
            <Link className="cv-menu" to="/">
              Home
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link className="cv-menu" to="/works">
              Works
            </Link>
          </Navbar.Brand>

          <Navbar.Brand>
            <Link className="cv-menu" to="/CV">
              CV
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link className="cv-menu" to="/Contact">
              Contact
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
