const Footer= () => {
    return(
        <div className='Footer'>
            <div className='LogoBawah'>
            <img className="LogoFooter"
                src={gambar.logo_footer}
                alt="logo footer"
            />
            </div>
            <div className='FooterLink'>
                <h3>Tautan Cepat</h3>
                <h4>Buat Akun</h4>
                <h4>Tentang Kami</h4>
            </div>
            <div className='FooterLainnya'>
                <h3>Lainnya</h3>
                <h4>Pengguna FAQs</h4>
                <h4>Kontak Kami</h4>
                <h4>Legal</h4>
                <h4>Kebijakan Privasi</h4>
                <h4>Syarat dan Ketentuan</h4>
            </div>
            <div className='FooterLayanan'>
                <h3>Layanan</h3>
                <h4>Servis</h4>
                <h4>Konsultasi</h4>
                <h4>Layanan Antar 
                Jemput
                </h4>
            </div>
            <div className='FooterSubscribe'>
                <h3>
                Berlangganan buletin kami dan jadilah
                yang pertama tahu tentang
                pembaruan kami
                </h3>
                <fieldset>Alamat Kami</fieldset>
                <button>Langganan</button>
            </div>
            <div className='Copyright'>

            </div>
            <div className='SosialMedia'>
                <img className="LogoYT"
                src={gambar.Youtube}
                alt="logo Youtube"
                />
                <img className="LogoIG"
                src={gambar.Instagram}
                alt="logo Instagram"
                />
                <img className="LogoFB"
                src={gambar.Facebook}
                alt="logo Facebook"
                />
                <img className="LogoTW"
                src={gambar.Twitter}
                alt="logo Twitter"
                />
            </div>
        </div>
        )
};
export default Footer;