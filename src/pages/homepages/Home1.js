import gambar from '.components/img.js';

const Home1 = () => {
	return (
        <div className="Logo">
            <gambar gbr={'emblem'} className="Emblem"/>
            
            <h1>ServEasy</h1>
            <h3>Get your service easy here</h3>
            <h2>Saat ini Hadir Aplikasi Layanan Jasa Service</h2>
            <h4>ServEasy adalah penyedia start-up layanan laptop dan komputer yang \n
                pekerjaannya dapat dilakukan di mana pelanggan berada dan dapat \n
                berkonsultasi langsung secara online dengan ahli perbaikan komputer 
            </h4>

            <gambar className="GooglePlay" gbr={GooglePlay} />

        </div>
    );
}

export default Home1;