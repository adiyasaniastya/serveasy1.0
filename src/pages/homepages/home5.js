import gambar from '.components/img.js';

const home5 = () => {
    return(
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
    )
};

export default home5;