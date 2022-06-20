import Kelas from "./Home3.module.css";
import { Container, Row, Col } from "react-bootstrap";
import works_smile from "../../../Assets/img/works_smile.jpg";
import works_account from "../../../Assets/img/works_account.jpg";
import works_secure from "../../../Assets/img/works_secure.jpg";

const Home3 = () => {
  return (
    <>
      <Container>
        <Col className={Kelas.How} md={{ offset: 5 }}>
          Bagaimana aplikasi ini berjalan
        </Col>
      </Container>

      <Container fluid className="HowItWorks">
        <Row>
          <Col className={Kelas.newAcc} xs={6} md={{ span: 2, offset: 2 }}>
            <img src={works_account} className={Kelas.works_account} />;
            <Row className={Kelas.GrupAkun}>Membuat akun baru</Row>
            <Row className={Kelas.AccPar}>
              Untuk pelanggan baru yang ingin {"\n"}
              mencoba menggunakan layanan {"\n"}
              penyedia jasa service
            </Row>
          </Col>
          <Col className="GrupVerif" md={{ span: 2, offset: 1 }}>
            <img src={works_secure} className={Kelas.works_secure} />
            <Row className={Kelas.Verif}>Dapatkan Verifikasi</Row>
            <Row className={Kelas.VerifPar}>
              Setelah membuat akun baru {"\n"}
              pastikan sudah mendapatkan {"\n"}
              verifikasi email
            </Row>
          </Col>
          <Col className="GrupEnjoy" xs={6} md={{ span: 2, offset: 1 }}>
            <img src={works_smile} className={Kelas.works_smile} />;
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
