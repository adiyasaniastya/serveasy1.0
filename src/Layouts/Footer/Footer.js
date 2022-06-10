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

const Footer = () => {
  return (
    <div className="Footer">
      {/* <img src={LogoFooter} className={Kelas.logo_footer} /> */}
      {/* <LogoFooter className={Kelas.logo_footer} /> */}
      <div className={Kelas.FooterLink}>
        <div className={Kelas.JudulTautan}>Tautan Cepat</div>
        <div className={Kelas.buatAkun}>Buat Akun</div>
        <div className={Kelas.tentangKami}>Tentang Kami</div>
      </div>
      <div className="FooterLainnya">
        <div className={Kelas.JudulLainnya}>Lainnya</div>
        <div className={Kelas.FAQ}>Pengguna FAQs</div>
        <div className={Kelas.contactUs}>Kontak Kami</div>
        <div className={Kelas.Legal}>Legal</div>
        <div className={Kelas.Policy}>Kebijakan Privasi</div>
        <div className={Kelas.TnC}>Syarat dan Ketentuan</div>
      </div>
      <div className="FooterLayanan">
        <div className={Kelas.JudulLayanan}>Layanan</div>
        <div className={Kelas.Servis}>Servis</div>
        <div className={Kelas.Consult}>Konsultasi</div>
        <div className={Kelas.Jemput}>
          Layanan Antar {"\n"}
          Jemput
        </div>
      </div>
      <div className={Kelas.FootSubs}>
        <div className={Kelas.SubsPar}>
          Berlangganan buletin kami dan jadilah yang pertama tahu tentang
          pembaruan kami
        </div>
        <div className={Kelas.SubsArea}>
          <fieldset className={Kelas.SubsField}>Alamat Email</fieldset>
          <button className={Kelas.SubsButton}>Langganan</button>
        </div>
      </div>
      <div className={Kelas.Bawah}>
        <div className={Kelas.Copyright}>
          Copyright © 2022. All rights reserved.
        </div>
        <div className={Kelas.SosialMedia}>
          {/* <Youtube className={Kelas.Youtube} /> */}
          {/* <img src={Youtube} className={Kelas.Youtube} />
          <img src={Instagram} className={Kelas.Instagram} />
          <img src={Facebook} className={Kelas.Facebook} />
          <img src={Twitter} className={Kelas.Twitter} /> */}
          {/* <Instagram className={Kelas.Instagram} /> */}
          {/* <Facebook className={Kelas.Facebook} /> */}
          {/* <Twitter className={Kelas.Twitter} /> */}
        </div>
      </div>
    </div>
  );
};
export default Footer;
