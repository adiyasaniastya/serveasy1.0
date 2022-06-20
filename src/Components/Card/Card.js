import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

function Card(link, judul, text,) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={link} />
      <Card.Body>
        <Card.Title>{judul}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {/* <Button variant="primary">Berikutnya</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Card;
