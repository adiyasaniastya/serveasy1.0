// import Gambar from '../../../Components/Img/Img.js';
import Kelas from "./Home3.module.css";
import { ReactComponent as WorksAccount } from "../../../Assets/img/works_account.svg";
import { ReactComponent as WorksSecure} from "../../../Assets/img/works_secure.svg";
import { ReactComponent as WorksSmile } from "../../../Assets/img/works_smile.svg";

const Home3 = () => {
  return (
    <div className="HowItWorks">
      <div className={Kelas.How}>Bagaimana aplikasi ini berjalan</div>
      <div className={Kelas.GrupAkun}>
        <WorksAccount className={Kelas.works_account} />
        {/* <Gambar gbr={'works_account'} className={Kelas.works_account}/> */}
        <div className={Kelas.newAcc}>Membuat akun baru</div>
        <div className={Kelas.AccPar}>
          Untuk pelanggan baru yang ingin {"\n"}
          mencoba menggunakan layanan {"\n"}
          penyedia jasa service
        </div>
      </div>
      <div className="GrupVerif">
      <WorksSecure className={Kelas.works_secure} /> 
        {/* <Gambar gbr={'works_secure'} className={Kelas.works_secure}/> */}
        <div className={Kelas.Verif}>Dapatkan Verifikasi</div>
        <div className={Kelas.VerifPar}>
          Setelah membuat akun baru {"\n"}
          pastikan sudah mendapatkan {"\n"}
          verifikasi email
        </div>
      </div>
      <div className="GrupEnjoy">
      <WorksSmile className={Kelas.works_smile} /> 
        {/* <Gambar gbr={'works_smile'} className={Kelas.works_smile}/> */}
        <div className={Kelas.EnjoyJud}>Nikmati Aplikasinya</div>
        <div className={Kelas.EnjoyPar}>
          Jika sudah, selamat menikmati {"\n"}
          layanan kami
        </div>
      </div>
    </div>
  );
};

export default Home3;
