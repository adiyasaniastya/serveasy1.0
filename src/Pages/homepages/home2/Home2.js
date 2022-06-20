import Kelas from "./Home2.module.css";
// import { Button } from "react-bootstrap";
import org_konsul from "../../../Assets/img/org_konsul.jpg";
import org_jemput from "../../../Assets/img/org_jemput.jpg";
import org_servis from "../../../Assets/img/org_servis.jpg";
import Card from "react-bootstrap/Card";

const Home2 = () => {
  return (
    <div>
      <h2 className={Kelas.Apa}>
        Apa yang bisa kami {"\n"}
        lakukan untuk membantu {"\n"}
        Pelanggan kami di era digital {"\n"}
        saat ini.
      </h2>
      <Card md={{ span: 2, offset: 2 }} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={org_konsul} />
        <Card.Body>
          <Card.Title>Konsultasi</Card.Title>
          <Card.Text>
            Menawarkan fitur konsultasi terlebih dahulu sebelum mengajukan jasa
            service pilihan anda
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={org_servis} />
        <Card.Body>
          <Card.Title>Jasa Service</Card.Title>
          <Card.Text>
            Menawarkan jasa service laptop {"\n"}
            dan komputer sesuai kebutuhan {"\n"}
            anda.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={org_jemput} />
        <Card.Body>
          <Card.Title>Layanan antar jemput</Card.Title>
          <Card.Text>
            Menyediakan fitur layanan antar {"\n"}
            jemput untuk jasa service yang {"\n"}
            mendukung dengan fitur layanan {"\n"}
            ini.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home2;
