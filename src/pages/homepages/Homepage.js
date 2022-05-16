import Component from './Assets/img/'

const Navbar = (props)=> {
  return (
    <>
    <button>Beranda</button>
    <button>Tentang Kami</button>
    <button>Hubungi Kami</button>
    <button>Masuk</button>
    </>
  )
}
// layout dari web
const mainpage = () => {
  // render()
  return(
    <>
    <Navbar/>
    <div className="Logo">
      <img className="Emblem"
          src={gambar.emblem}
          alt="emblem"
        />
      <h1>ServEasy</h1>
      <h3>Get your service easy here</h3>
      <h2>Saat ini Hadir Aplikasi Layanan Jasa Service</h2>
      <h4>ServEasy adalah penyedia start-up layanan laptop dan komputer yang \n
        pekerjaannya dapat dilakukan di mana pelanggan berada dan dapat \n
        berkonsultasi langsung secara online dengan ahli perbaikan komputer 
      </h4>

      <img className="GooglePlay" src={gambar.GooglePlay} alt=" di Google Play"/>

    </div>
    <div className="Help">
      <h2>Apa yang bisa kami \n
        lakukan untuk membantu \n
        Pelanggan kami di era digital \n
        saat ini.
      </h2>
      <div className='Konsul'>
        <h3> Konsultasi</h3>
        <h4> Menawarkan fitur konsultasi \n 
          terlebih dahulu sebelum
          mengajukan jasa service pilihan 
          anda.
        </h4>
        <button>Berikutnya </button>
      </div>
      <div className='Servis'>
        <h4>Segera hadir</h4>
        <h3>Menawarkan jasa service laptop
          dan komputer sesuai kebutuhan
          anda.
        </h3>
        <button>Berikutnya </button>
      </div>
      <div className='Jemput'>
        <h3>Layanan antar jemput</h3>
        <h4>
          Menyediakan fitur layanan antar
          jemput untuk jasa service yang 
          mendukung dengan fitur layanan
          ini.
        </h4>
        <button>Berikutnya </button>
      </div>
    </div>
    <div className='HowItWorks'>
      <h3>Bagaimana aplikasi ini berjalan</h3>
      <div className='BuatAkun'>
        <img className="works_account"
          src={gambar.works_account}
          alt="info bikin akun"
        />
        <h3>Membuat akun baru</h3>
        <h4>
          Untuk pelanggan baru yang ingin
          mencoba menggunakan layanan
          penyedia jasa service
        </h4>
      </div>
      <div className='DptVerifikasi'>
        <img className="works_secure"
          src={gambar.works_secure}
          alt="info verif akun"
        />
        <h3>Dapatkan Verifikasi</h3>
        <h4>
          Setelah membuat akun baru
          pastikan sudah mendapatkan
          verifikasi email
        </h4>
      </div>
      <div className='Enjoy'>
        <img className="works_smile"
          src={gambar.works_smile}
          alt="info nikmati aplikasi"
        />
        <h3>Nikmati Aplikasinya</h3>
        <h4>
          Jika sudah, selamat menikmati
          layanan kami
        </h4>
      </div>
    </div>
    <div className='Testimoni'>
      <img className="user_testimoni"
          src={gambar.testimoni}
          alt="info testimoni dari user"
      />
      <h1>"</h1>
      <h3>
        Aplikasi ini sangat berguna untuk mempermudah
        dalam proses menemukan jasa service terbaik dan
        cocok dengan pilihan kita, apalagi dengan adanya
        fitur konsultasi terlebih dahulu memudahkan kita
        untuk bertanya tanya terlebih dahulu sebelum
        memakai jasa service tersebut.
      </h3>
      <h3>Christin</h3>
      <button>prev</button>
      <button>next</button>
    </div>
    <div className='ComingSoon'>
      <h2> Unduh Aplikasinya dan nikmati fiturnya!</h2>
      <h3> 
        Dapatkan pengalaman yang menarik dengan 
        menggunakan layanan penghubung jasa service
        laptop dan komputer.
      </h3>
      <img className="Emblem"
          src={gambar.emblem}
          alt="emblem"
      />
      <h2> Segera Hadir</h2>
      <h3> Tersedia dalam perangkat Android</h3>
    </div>
    {/* footer */}
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
    </>,
}

export default mainpage;
