import Gambar from '../../components/img.js';
import Kelas from './home1.css'

const home4= () => {
    return(
      <div className='Testimoni'>
        <h1 className={Kelas.Judul}>
          Apa yang calon Pelanggan tanggapi
        </h1>
        <Gambar gbr={testimoni} className={Kelas.testimoni}/>
      <h3 className={Kelas.Par}>
        Aplikasi ini sangat berguna untuk mempermudah {'\n'}
        dalam proses menemukan jasa service terbaik dan {'\n'}
        cocok dengan pilihan kita, apalagi dengan adanya {'\n'}
        fitur konsultasi terlebih dahulu memudahkan kita {'\n'}
        untuk bertanya tanya terlebih dahulu sebelum {'\n'}
        memakai jasa service tersebut.
      </h3>
      <h3 className={Kelas.Nama}>Christin</h3>
      <button className={Kelas.TombolPrev}>prev</button>
      <button className={Kelas.TombolNext}>next</button>
    </div>
    )
};

export default home4;