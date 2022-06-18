import { Link } from "react-router-dom";
// import Kelas from "./Navbar2.module.css";
import { ReactComponent as Emblem } from "../../Assets/img/emblem.svg";
import {
  Navbar,
  Container,
  Nav
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
function MainNavigation() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      
      <Container>
        <Emblem href="#home"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto">
            <Nav.Link href="#home">Beranda</Nav.Link>
            <Nav.Link href="#link">Profil ServEasy</Nav.Link>
            <Nav.Link href="#link">Kontak Kami</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default MainNavigation;
