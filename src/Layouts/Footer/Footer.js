// import Gambar from '../../Components/Img/Img.js';

// import { ReactComponent as LogoFooter } from "../../Assets/img/logo_footer.svg";
// import { ReactComponent as Youtube } from "../../Assets/img/Youtube.svg";
// import { ReactComponent as Instagram } from "../../Assets/img/Instagram.svg";
// import { ReactComponent as Facebook } from "../../Assets/img/Facebook.svg";
// import { ReactComponent as Twitter } from "../../Assets/img/Twitter.svg";
import Kelas from "./Footer.module.css";
import Instagram from "../../Assets/img/Instagram.png";
import Youtube from "../../Assets/img/Youtube.png";
import Facebook from "../../Assets/img/Facebook.png";
import Twitter from "../../Assets/img/Twitter.png";
import LogoFooter from "../../Assets/img/logo_footer.png";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div>
        <Container>
          <Row>
            <div className="col-md-2 col-sm-4">
              <h4 className={Kelas.JudulTautan}>Tautan Cepat</h4>
              <ul className="list-unstyled">
                <li className={Kelas.buatAkun}>Buat Akun</li>
                <li className={Kelas.tentangKami}>Tentang Kami</li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-4">
              <h4 className={Kelas.JudulLainnya}>Lainnya</h4>
              <ul className="list-unstyled">
                <li className={Kelas.FAQ}>Pengguna FAQs</li>
                <li className={Kelas.contactUs}>Kontak Kami</li>
                <li className={Kelas.Legal}>Legal</li>
                <li className={Kelas.Policy}>Privasi Polisi</li>
                <li className={Kelas.TnC}>Syarat dan Ketentuan</li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-4">
              <h4 className={Kelas.JudulLayanan}>Layanan</h4>
              <ul className="list-unstyled">
                <li className={Kelas.Servis}>Servis</li>
                <li className={Kelas.Consult}>Konsultasi</li>
                <li className={Kelas.Jemput}>Layanan Antar Jemput</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <p className={Kelas.SubsPar} md={{ span: 3, offset: 3 }}>
                Berlangganan buletin kami dan jadilah {"\n"}
                yang pertama tahu tentang {"\n"}
                pembaruan kami
              </p>
              <div className={Kelas.SubsArea}>
                <fieldset className={Kelas.SubsField}>Alamat Email</fieldset>
                <button className={Kelas.SubsButton}>Langganan</button>
              </div>
            </div>
          </Row>
        </Container>
        <Container>
          <div className="footer-bottom">
            <p className="text-xs-center">
              Copyright &copy;{new Date().getFullYear()} All Rights Reserved.
            </p>
            <div className={Kelas.SosialMedia}>
              {/* <img src={Youtube} className={Kelas.Youtube} />
              <img src={Instagram} className={Kelas.Instagram} />
              <img src={Facebook} className={Kelas.Facebook} />
              <img src={Twitter} className={Kelas.Twitter} /> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
export default Footer;
