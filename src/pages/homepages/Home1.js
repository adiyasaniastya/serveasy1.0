import Gambar from '../../components/Img.js';
import Kelas from './home1.css'

const Home1 = () => {
	return (
        <div>
            <Gambar gbr={'emblem'} className={Kelas.Emblem}/>
            <div className={Kelas.Judul}>
                <h1 >ServEasy</h1>
                <h3>
                    Get your service easy here{'\n'}
                    Dapatkan layanan Anda dengan mudah di sini
                </h3>
            </div>
            <h2 className={Kelas.Saat}>Saat ini Hadir Aplikasi Layanan Jasa Service</h2>
            <h4 className={Kelas.Paragraph}>ServEasy adalah penyedia start-up layanan laptop dan komputer yang {'\n'}
                pekerjaannya dapat dilakukan di mana pelanggan berada dan dapat {'\n'}
                berkonsultasi langsung secara online dengan ahli perbaikan komputer 
            </h4>

            <Gambar gbr={'googleplay'} className={Kelas.googleplay}  />
            <Gambar gbr={'jumbo_hp'} className={Kelas.jumbo_hp}/>
        </div>
    );
}

export default Home1;