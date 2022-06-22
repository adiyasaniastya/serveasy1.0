import Kelas from "./Home5.module.css";
import googleplay from "../../../Assets/img/googleplay.png";
import { Container, Col, Row } from "react-bootstrap";

const Home5 = () => {
  return (
    <>
      <Container className={Kelas.ComingSoon}>
        <Row className={Kelas.Judul}>
          Unduh Aplikasinya dan nikmati fiturnya!
        </Row>
        <Row className={Kelas.Par}>
          Dapatkan pengalaman yang menarik dengan {"\n"}
          menggunakan layanan penghubung jasa service {"\n"}
          laptop dan komputer.
        </Row>
        <Row>
          <img src={googleplay} className={Kelas.googleplay} />
        </Row>
        <Row className={Kelas.Soon}>Segera Hadir</Row>
        <Row className={Kelas.Avail}>Tersedia dalam perangkat Android</Row>
      </Container>
    </>
  );
};

export default Home5;
