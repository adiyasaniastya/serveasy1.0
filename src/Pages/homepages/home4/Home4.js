// import Gambar from '../../../Components/Img/Img.js';
import Kelas from "./Home4.module.css";

// import jumbo_hp from "../../../Assets/img/jumbo_hp.jpg";
// <img src={jumbo_hp} className={Kelas.jumbo_hp} />

import { ReactComponent as Testimoni } from "../../../Assets/img/testimoni.svg";
        // <Emblem className={Kelas.Emblem} />
const Home4 = () => {
  return (
    <div className="Testimoni">
      <div className={Kelas.Judul}>Apa yang calon Pelanggan tanggapi</div>
      <Testimoni className={Kelas.testimoni} />
      {/* <Gambar gbr={'testimoni'} className={Kelas.testimoni}/> */}
      <div className={Kelas.Par}>
        Aplikasi ini sangat berguna untuk mempermudah {"\n"}
        dalam proses menemukan jasa service terbaik dan {"\n"}
        cocok dengan pilihan kita, apalagi dengan adanya {"\n"}
        fitur konsultasi terlebih dahulu memudahkan kita {"\n"}
        untuk bertanya tanya terlebih dahulu sebelum {"\n"}
        memakai jasa service tersebut.
      </div>
      <div className={Kelas.Nama}>Christin</div>
      <button className={Kelas.TombolPrev}>prev</button>
      <button className={Kelas.TombolNext}>next</button>
    </div>
  );
};

export default Home4;
