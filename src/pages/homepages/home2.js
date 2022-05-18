import gambar from '.components/img.js'

const home2 = () => {
    return(
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
    )
};

export default home2;