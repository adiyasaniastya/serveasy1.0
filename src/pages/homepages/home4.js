import gambar from '.components/img.js'

const home4= () => {
    return(
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
    )
};

export default home4;