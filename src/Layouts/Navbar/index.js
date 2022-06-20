import { Link, NavLink } from "react-router-dom";
// import Kelas from "./Navbar2.module.css";
import { ReactComponent as Emblem } from "../../Assets/img/emblem.svg";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
function MainNavigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
              <Nav.Link href="#home">Beranda</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Profil ServEasy
              </Nav.Link>
              <Nav.Link href="#contactus">Kontak Kami</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavigation;
