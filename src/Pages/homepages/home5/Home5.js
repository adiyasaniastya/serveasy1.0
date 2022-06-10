// import Gambar from '../../../Components/Img/Img.js';
import Kelas from "./Home5.module.css";
import { ReactComponent as Googleplay } from "../../../Assets/img/googleplay.svg";

const Home5 = () => {
  return (
    <div className="ComingSoon">
      <div className={Kelas.Judul}>
        {" "}
        Unduh Aplikasinya dan nikmati fiturnya!
      </div>
      <div className={Kelas.Par}>
        Dapatkan pengalaman yang menarik dengan {"\n"}
        menggunakan layanan penghubung jasa service {"\n"}
        laptop dan komputer.
      </div>
      <Googleplay className={Kelas.googleplay} />
      {/* <Gambar gbr={'googleplay'} className={Kelas.googleplay}/> */}
      <div className={Kelas.Soon}> Segera Hadir</div>
      <div className={Kelas.Avail}> Tersedia dalam perangkat Android</div>
    </div>
  );
};

export default Home5;
