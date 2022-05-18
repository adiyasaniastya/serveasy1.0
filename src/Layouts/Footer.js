import Gambar from '../components/Img.js';
import Kelas from './Footer.css'

const Footer= () => {
    return(
        <div className='Footer'>
            <Gambar gbr={'logo_footer'} className={Kelas.logo_footer}/>
            <div className={Kelas.FooterLink}>
                <h3 className={Kelas.JudulTautan}>Tautan Cepat</h3>
                <h4 className={Kelas.buatAkun}>Buat Akun</h4>
                <h4 className={Kelas.tentangKami}>Tentang Kami</h4>
            </div>
            <div className='FooterLainnya'>
                <h3 className={Kelas.JudulLainnya}>Lainnya</h3>
                <h4 className={Kelas.FAQ}>Pengguna FAQs</h4>
                <h4 className={Kelas.contactUs}>Kontak Kami</h4>
                <h4 className={Kelas.Legal}>Legal</h4>
                <h4 className={Kelas.Policy}>Kebijakan Privasi</h4>
                <h4 className={Kelas.TnC}>Syarat dan Ketentuan</h4>
            </div>
            <div className='FooterLayanan'>
                <h3 className={Kelas.JudulLayanan}>Layanan</h3>
                <h4 className={Kelas.Servis}>Servis</h4>
                <h4 className={Kelas.Consult}>Konsultasi</h4>
                <h4 className={Kelas.Jemput}>
                    Layanan Antar {'\n'}
                    Jemput
                </h4>
            </div>
            <div className={Kelas.FootSubs}>
                <h3 className={Kelas.SubsPar}>
                Berlangganan buletin kami dan jadilah
                yang pertama tahu tentang
                pembaruan kami
                </h3>
                <div className={Kelas.SubsArea}>
                    <fieldset className={Kelas.SubsField}>Alamat Email</fieldset>
                    <button className={Kelas.SubsButton}>Langganan</button>
                </div>
            </div>
            <div className={Kelas.Bawah}>
                <h4 className={Kelas.Copyright}>Copyright © 2022. All rights reserved.</h4>
                <div className={Kelas.SosialMedia}>
                    <Gambar gbr={'Youtube'} className={Kelas.Youtube}/>
                    <Gambar gbr={'Instagram'} className={Kelas.Instagram}/>
                    <Gambar gbr={'Facebook'} className={Kelas.Facebook}/>
                    <Gambar gbr={'Twitter'} className={Kelas.Twitter}/>
                </div>
            </div>
        </div>
        )
};
export default Footer;