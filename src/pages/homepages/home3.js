import gambar from '.components/img.js'

const home3 = () => {
    return(
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
    )
};

export default home3;