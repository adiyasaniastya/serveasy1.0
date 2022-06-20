import Kelas from "./Footer.module.css";
import Instagram from "../../Assets/img/Instagram.png";
import Youtube from "../../Assets/img/Youtube.png";
import Facebook from "../../Assets/img/Facebook.png";
import Twitter from "../../Assets/img/Twitter.png";
import LogoFooter from "../../Assets/img/logo_footer.png";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <>
      <div className={Kelas.Footer}>
        <Container>
          <div className={Kelas.Atas}>
            <Row>
              <div className="col-md-2 col-sm-4">
                <img src={LogoFooter} className={Kelas.LogoFooter} />
              </div>
              <div className="col-md-2 col-sm-4">
                <h4 className={Kelas.JudulTautan}> Tautan Cepat </h4>
                <ul className="list-unstyled">
                  <li className={Kelas.buatAkun}> Buat Akun </li>
                  <li className={Kelas.tentangKami}> Tentang Kami </li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-4">
                <h4 className={Kelas.JudulLainnya}> Lainnya </h4>
                <ul className="list-unstyled">
                  <li className={Kelas.FAQ}> Pengguna FAQs </li>
                  <li className={Kelas.contactUs}> Kontak Kami </li>
                  <li className={Kelas.Legal}> Legal </li>
                  <li className={Kelas.Policy}> Privasi Polisi </li>
                  <li className={Kelas.TnC}> Syarat dan Ketentuan </li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-4">
                <h4 className={Kelas.JudulLayanan}> Layanan </h4>
                <ul className="list-unstyled">
                  <li className={Kelas.Servis}> Servis </li>
                  <li className={Kelas.Consult}> Konsultasi </li>
                  <li className={Kelas.Jemput}> Layanan Antar Jemput </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <p
                  className={Kelas.SubsPar}
                  md={{
                    span: 3,
                    offset: 3,
                  }}
                >
                  Berlangganan buletin kami dan jadilah {"\n"}
                  yang pertama tahu tentang {"\n"}
                  pembaruan kami
                </p>
                <div className={Kelas.SubsArea}>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Alamat Email" />
                    </Form.Group>
                  </Form>
                  <Button className={Kelas.SubsButton}> Langganan </Button>
                </div>
              </div>
            </Row>
          </div>
        </Container>
        <Container>
          <div className={Kelas.Copyright}>
            <Row className="footer-bottom">
              <Col className={Kelas.tulisanhak}>
                Copyright &copy; {new Date().getFullYear()} {"\n"}
                All Rights Reserved.
              </Col>
              <Col className={Kelas.SosialMedia}>
                <img src={Youtube} className={Kelas.Youtube} />
                <img src={Instagram} className={Kelas.Instagram} />
                <img src={Facebook} className={Kelas.Facebook} />
                <img src={Twitter} className={Kelas.Twitter} />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
export default Footer;
