import Kelas from "./Home4.module.css";
import { Carousel } from "react-bootstrap";
import { useState } from "react";

import testimoni from "../../../Assets/img/testimoni.png";
function Home4() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="Testimonie">
        <div className={Kelas.Judul}>Apa yang calon Pelanggan tanggapi</div>
        <img src={testimoni} className={Kelas.testimoni} />
        <div className={Kelas.Par}>
          Aplikasi ini sangat berguna untuk mempermudah {"\n"}
          dalam proses menemukan jasa service terbaik dan {"\n"}
          cocok dengan pilihan kita, apalagi dengan adanya {"\n"}
          fitur konsultasi terlebih dahulu memudahkan kita {"\n"}
          untuk bertanya tanya terlebih dahulu sebelum {"\n"}
          memakai jasa service tersebut.
        </div>
        <div className={Kelas.Nama}>Christin</div>
        <button className={Kelas.TombolPrev}>prev</button>
        <button className={Kelas.TombolNext}>next</button>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={1000}>
          {/* <Testimoni className={Kelas.testimoni} alt="First slide" /> */}
          <Carousel.Caption>
            <h3 className={Kelas.Nama}>Christin</h3>
            <p className={Kelas.Par}>
              Aplikasi ini sangat berguna untuk mempermudah {"\n"}
              dalam proses menemukan jasa service terbaik dan {"\n"}
              cocok dengan pilihan kita, apalagi dengan adanya {"\n"}
              fitur konsultasi terlebih dahulu memudahkan kita {"\n"}
              untuk bertanya tanya terlebih dahulu sebelum {"\n"}
              memakai jasa service tersebut.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </>
  );
}

export default Home4;
