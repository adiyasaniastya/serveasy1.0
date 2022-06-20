import Kelas from "./Home1.module.css";
import jumbo_hp from "../../../Assets/img/jumbo_hp.jpg";
import emblem from "../../../Assets/img/emblem.jpg";
import googleplay from "../../../Assets/img/googleplay.jpg";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const Home1 = () => {
  return (
    <>
      <Container fluid className={Kelas.main}>
        <Row>
          <Col>
            <img src={emblem} className={Kelas.emblem} />
          </Col>
          <Col className={Kelas.tagline} md lg="4">
            ServEasy
          </Col>
          <Col className={Kelas.kal1}>
            Get your service easy here {"\n"}
            Dapatkan layanan Anda dengan mudah di sini
          </Col>
          <Col className={Kelas.Saat}>
            Saat ini Hadir Aplikasi Layanan Jasa Service
          </Col>
          <Col className={Kelas.Paragraph}>
            ServEasy adalah penyedia start-up layanan laptop dan komputer yang
            {"\n"}
            pekerjaannya dapat dilakukan di mana pelanggan berada dan dapat
            {"\n"}
            berkonsultasi langsung secara online dengan ahli perbaikan komputer
          </Col>
          <Col>
            <img src={jumbo_hp} className={Kelas.jumbo_hp} />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={googleplay} className={Kelas.googleplay} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home1;
