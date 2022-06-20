// import Gambar from '../../../Components/Img/Img.js';
import Kelas from "./Home3.module.css";
import { ReactComponent as WorksAccount } from "../../../Assets/img/works_account.svg";
import { ReactComponent as WorksSecure } from "../../../Assets/img/works_secure.svg";
import { ReactComponent as WorksSmile } from "../../../Assets/img/works_smile.svg";
import { Container, Row, Col } from "react-bootstrap";

const Home3 = () => {
  return (
    <>
      <Container>
        <Col className={Kelas.How} md={{offset: 5 }}>Bagaimana aplikasi ini berjalan</Col>
      </Container>

      <Container fluid className="HowItWorks">
        <Row>
          <Col className={Kelas.newAcc} xs={6} md={{ span: 2, offset: 2 }}>
            <WorksAccount className={Kelas.works_account} />
            <Row className={Kelas.GrupAkun}>Membuat akun baru</Row>
            <Row className={Kelas.AccPar}>
              Untuk pelanggan baru yang ingin {"\n"}
              mencoba menggunakan layanan {"\n"}
              penyedia jasa service
            </Row>
          </Col>
          <Col className="GrupVerif" md={{ span: 2, offset: 1 }}>
            <WorksSecure className={Kelas.works_secure} />
            <Row className={Kelas.Verif}>Dapatkan Verifikasi</Row>
            <Row className={Kelas.VerifPar}>
              Setelah membuat akun baru {"\n"}
              pastikan sudah mendapatkan {"\n"}
              verifikasi email
            </Row>
          </Col>
          <Col className="GrupEnjoy" xs={6} md={{ span: 2, offset: 1 }}>
            <WorksSmile className={Kelas.works_smile} />
            <Row className={Kelas.EnjoyJud}>Nikmati Aplikasinya</Row>
            <Row className={Kelas.EnjoyPar}>
              Jika sudah, selamat menikmati {"\n"}
              layanan kami{" "}
            </Row>
          </Col>
          <Col md={{ offset: 1 }}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Home3;
