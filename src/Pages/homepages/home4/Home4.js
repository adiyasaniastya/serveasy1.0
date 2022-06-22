import Kelas from "./Home4.module.css";
import { Container, Col, Row } from "react-bootstrap";
import testimoni from "../../../Assets/img/testimoni.png";
import quote from "../../../Assets/img/quote.png";
import back from "../../../Assets/img/back.png";
import next from "../../../Assets/img/next.png";

function Home4() {
  return (
    <>
      <Container className={Kelas.AllHome4}>
        <Row className={Kelas.Baris}>
          <div className={Kelas.Judul}>Apa yang calon Pelanggan tanggapi</div>
          <Col className={Kelas.GambarTest}>
            <img src={testimoni} className={Kelas.testimoni} />
          </Col>
          <Col className={Kelas.Tulisan}>
            <div className="Testimonie">
              <img src={quote} className={Kelas.quote} />
              <div className={Kelas.Par}>
                Aplikasi ini sangat berguna untuk mempermudah {"\n"}
                dalam proses menemukan jasa service terbaik dan {"\n"}
                cocok dengan pilihan kita, apalagi dengan adanya {"\n"}
                fitur konsultasi terlebih dahulu memudahkan kita {"\n"}
                untuk bertanya tanya terlebih dahulu sebelum {"\n"}
                memakai jasa service tersebut.
              </div>
              <div className={Kelas.Nama}>Christin</div>
              <div className={Kelas.Tombol}>
                <img src={back} className={Kelas.TombolPrev} />
                <img src={next} className={Kelas.TombolNext} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home4;
