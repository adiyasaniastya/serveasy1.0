import Kelas from "./Home2.module.css";
// import { Button } from "react-bootstrap";
import org_konsul from "../../../Assets/img/org_konsul.png";
// ketuker servis sm jemputnya
import org_servis from "../../../Assets/img/org_jemput.png";
import org_jemput from "../../../Assets/img/org_servis.png";
import Card from "react-bootstrap/Card";
import { Container, Col, Row } from "react-bootstrap";

const Home2 = () => {
  return (
    <>
      <Container className={Kelas.AllHome2}>
        <Row>
          <Col className={Kelas.Kol1}>
            <h2 className={Kelas.Apa}>
              Apa yang bisa kami {"\n"}
              lakukan untuk membantu {"\n"}
              Pelanggan kami di era digital {"\n"}
              saat ini.
            </h2>

            <Card className={Kelas.CardServis} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={org_servis} />
              <Card.Body className={Kelas.IsiSer}>
                <small className="text-muted"> Segera Hadir </small>
                <Card.Title className={Kelas.JudSer}>Jasa Service</Card.Title>
                <Card.Text className={Kelas.ParSer}>
                  Menawarkan jasa service laptop {"\n"}
                  dan komputer sesuai kebutuhan {"\n"}
                  anda.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col className={Kelas.Kol2}>
            <Card
              className={Kelas.CardKonsul}
              md={{ span: 2, offset: 2 }}
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src={org_konsul} />
              <Card.Body>
                <Card.Title className={Kelas.JudKon}>Konsultasi</Card.Title>
                <Card.Text className={Kelas.ParKon}>
                  Menawarkan fitur konsultasi terlebih dahulu sebelum mengajukan
                  jasa service pilihan anda
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className={Kelas.CardJemput} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={org_jemput} />
              <Card.Body>
                <Card.Title className={Kelas.JudJem}>
                  Layanan antar jemput
                </Card.Title>
                <Card.Text className={Kelas.ParJem}>
                  Menyediakan fitur layanan antar {"\n"}
                  jemput untuk jasa service yang {"\n"}
                  mendukung dengan fitur layanan {"\n"}
                  ini.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home2;
