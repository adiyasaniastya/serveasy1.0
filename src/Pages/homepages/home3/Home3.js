// import Gambar from '../../../Components/Img/Img.js';
import Kelas from './Home3.module.css';

const Home3 = () => {
    return(
      <div className='HowItWorks'>
      <h3 className={Kelas.How}>Bagaimana aplikasi ini berjalan</h3>
      <div className={Kelas.GrupAkun}>
        {/* <Gambar gbr={'works_account'} className={Kelas.works_account}/> */}
        <h3 className={Kelas.newAcc}>Membuat akun baru</h3>
        <h4 className={Kelas.AccPar}>
          Untuk pelanggan baru yang ingin {'\n'}
          mencoba menggunakan layanan {'\n'}
          penyedia jasa service
        </h4>
      </div>
      <div className='GrupVerif'>
        {/* <Gambar gbr={'works_secure'} className={Kelas.works_secure}/> */}
        <h3 className={Kelas.Verif}>Dapatkan Verifikasi</h3>
        <h4 className={Kelas.VerifPar}>
          Setelah membuat akun baru {'\n'}
          pastikan sudah mendapatkan {'\n'}
          verifikasi email
        </h4>
      </div>
      <div className='GrupEnjoy'>
        {/* <Gambar gbr={'works_smile'} className={Kelas.works_smile}/> */}
        <h3 className={Kelas.EnjoyJud} >Nikmati Aplikasinya</h3>
        <h4 className={Kelas.EnjoyPar}>
          Jika sudah, selamat menikmati {'\n'}
          layanan kami
        </h4>
      </div>
    </div>
    )
};

export default Home3;