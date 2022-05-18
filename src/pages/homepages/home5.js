import Gambar from '../../components/img.js';
import Kelas from './home1.css'

const home5 = () => {
    return(
      <div className='ComingSoon'>
        <h2 className={Kelas.Judul}> Unduh Aplikasinya dan nikmati fiturnya!</h2>
        <h3 className={Kelas.Par}> 
          Dapatkan pengalaman yang menarik dengan {'\n'}
          menggunakan layanan penghubung jasa service {'\n'}
          laptop dan komputer.
        </h3>
        <Gambar gbr={'googleplay'} className={Kelas.googleplay}/>
        <h2 className={Kelas.Soon}> Segera Hadir</h2>
        <h3 className={Kelas.Avail}> Tersedia dalam perangkat Android</h3>
      </div>
    )
};

export default home5;