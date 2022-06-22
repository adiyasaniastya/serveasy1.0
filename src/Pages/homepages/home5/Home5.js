import Kelas from "./Home5.module.css";
import googleplay from "../../../Assets/img/googleplay.png";

const Home5 = () => {
  return (
    <div className="ComingSoon">
      <div className={Kelas.Judul}>Unduh Aplikasinya dan nikmati fiturnya!</div>
      <div className={Kelas.Par}>
        Dapatkan pengalaman yang menarik dengan {"\n"}
        menggunakan layanan penghubung jasa service {"\n"}
        laptop dan komputer.
      </div>
      <img src={googleplay} className={Kelas.googleplay} />
      <div className={Kelas.Soon}> Segera Hadir</div>
      <div className={Kelas.Avail}> Tersedia dalam perangkat Android</div>
    </div>
  );
};

export default Home5;
