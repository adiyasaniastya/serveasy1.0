import Gambar from '../../components/Img.js';
import Kelas from './home2.css'

const Home2 = () => {
    return(
      <div>
        <h2 className={Kelas.Apa}>Apa yang bisa kami {'\n'}
          lakukan untuk membantu {'\n'}
          Pelanggan kami di era digital {'\n'}
          saat ini.
        </h2>
      <div className={Kelas.ModalKonsul}>
        <Gambar gbr={'org_konsul'} className={Kelas.org_konsul}/>
        <h3 className={Kelas.Konsul}> Konsultasi</h3>
        <h4 className={Kelas.TawarKonsul}> Menawarkan fitur konsultasi {'\n'}
          terlebih dahulu sebelum {'\n'}
          mengajukan jasa service pilihan {'\n'}
          anda.
        </h4>
        <button>Berikutnya </button>
      </div>
      <div className={Kelas.ModalJasa}>
        <Gambar gbr={'org_servis'} className={Kelas.org_servis}/>
        <h4 className={Kelas.Soon}>Segera hadir</h4>
        <h3 className={Kelas.Jasa}>Jasa Service</h3>
        <h3 className={Kelas.TawarJasa}>Menawarkan jasa service laptop {'\n'}
          dan komputer sesuai kebutuhan {'\n'}
          anda.
        </h3>
        <button>Berikutnya </button>
      </div>
      <div className={Kelas.ModalJemput}>
        <Gambar gbr={'org_jemput'} className={Kelas.org_jemput}/>
        <h3 className={Kelas.Jemput}>Layanan antar jemput</h3>
        <h4 className={Kelas.TawarJemput}>
          Menyediakan fitur layanan antar {'\n'}
          jemput untuk jasa service yang  {'\n'}
          mendukung dengan fitur layanan {'\n'}
          ini.
        </h4>
        <button>Berikutnya </button>
      </div>
    </div>
    )
};

export default Home2;