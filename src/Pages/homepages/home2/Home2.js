import Kelas from "./Home2.module.css";
import { ReactComponent as Org_konsul } from "../../../Assets/img/org_konsul.svg";
import { ReactComponent as Org_servis } from "../../../Assets/img/org_servis.svg";
import { ReactComponent as Org_jemput } from "../../../Assets/img/org_jemput.svg";
import { Button } from 'react-bootstrap';
const Home2 = () => {
  return (
    <div>
      <h2 className={Kelas.Apa}>
        Apa yang bisa kami {"\n"}
        lakukan untuk membantu {"\n"}
        Pelanggan kami di era digital {"\n"}
        saat ini.
      </h2>
      <div className={Kelas.ModalKonsul}>
        <div className={Kelas.org_konsul}>
          <Org_konsul alt="konsul" />
        </div>

        {/* <img src={Org_konsul} className={Kelas.org_konsul} alt="logo" /> */}
        {/* <Gambar gbr={'org_konsul'} className={Kelas.org_konsul}/> */}
        <h3 className={Kelas.Konsul}> Konsultasi</h3>
        <h4 className={Kelas.TawarKonsul}>
          {" "}
          Menawarkan fitur konsultasi {"\n"}
          terlebih dahulu sebelum {"\n"}
          mengajukan jasa service pilihan {"\n"}
          anda.
        </h4>
        <Button className={Kelas.Tombol}>Berikutnyaa </Button>
      </div>
      <div className={Kelas.ModalJasa}>
        <div className={Kelas.org_servis}>
          <Org_servis />
        </div>

        {/* <Gambar gbr={'org_servis'} className={Kelas.org_servis}/> */}
        <h4 className={Kelas.Soon}>Segera hadir</h4>
        <h3 className={Kelas.Jasa}>Jasa Service</h3>
        <h3 className={Kelas.TawarJasa}>
          Menawarkan jasa service laptop {"\n"}
          dan komputer sesuai kebutuhan {"\n"}
          anda.
        </h3>
        <button>Berikutnya </button>
      </div>
      <div className={Kelas.ModalJemput}>
        <Org_jemput className={Kelas.org_konsul} />
        {/* <Gambar gbr={'org_jemput'} className={Kelas.org_jemput}/> */}
        <h3 className={Kelas.Jemput}>Layanan antar jemput</h3>
        <h4 className={Kelas.TawarJemput}>
          Menyediakan fitur layanan antar {"\n"}
          jemput untuk jasa service yang {"\n"}
          mendukung dengan fitur layanan {"\n"}
          ini.
        </h4>
        <button>Berikutnya </button>
      </div>
    </div>
  );
};

export default Home2;
