import Kelas from "./Home1.module.css";
import { ReactComponent as Emblem } from "../../../Assets/img/emblem.svg";
import { ReactComponent as Googleplay } from "../../../Assets/img/googleplay.svg";
// import { ReactComponent as Jumbo_hp } from "../../../Assets/img/jumbo_hp.svg";
import jumbo_hp from "../../../Assets/img/jumbo_hp.jpg";

const Home1 = () => {
  return (
    <div className={Kelas.main}>
      <div className={Kelas.atas}>
        <Emblem className={Kelas.Emblem} />
        <div className={Kelas.tagline}>ServEasy</div>
        <div className={Kelas.kal1}>
          Get your service easy here{"\n"}
          Dapatkan layanan Anda dengan mudah di sini
        </div>
      </div>
      <div className={Kelas.Saat}>
        Saat ini Hadir Aplikasi Layanan Jasa Service
      </div>
      <div className={Kelas.Paragraph}>
        ServEasy adalah penyedia start-up layanan laptop dan komputer yang{" "}
        {"\n"}
        pekerjaannya dapat dilakukan di mana pelanggan berada dan dapat {"\n"}
        berkonsultasi langsung secara online dengan ahli perbaikan komputer
      </div>
      <Googleplay className={Kelas.Googleplay} />
      <img src={jumbo_hp} className={Kelas.jumbo_hp} />
      {/* <Jumbo_hp className={Kelas.Jumbo_hp} /> */}
    </div>
  );
};

export default Home1;
