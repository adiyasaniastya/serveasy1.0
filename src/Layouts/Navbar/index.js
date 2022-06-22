// import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Kelas from "./Navbar.module.css";
import emblem from "../../Assets/img/emblem.png";

function MainNavigation() {
  return (
    <>
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="grey"
          variant="light"
          className={Kelas.Navbar}
        >
          <Container>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
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
        <div className={Kelas.Tambahan}>
          <img src={emblem} className={Kelas.emblem} />
          <div className={Kelas.TulisanLogo}>
            <h3 className={Kelas.tagline}>ServEasy</h3>
            <h4 className={Kelas.kal1}>
              Get your service easy here {"\n"}
              Dapatkan layanan Anda dengan mudah di sini
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainNavigation;
