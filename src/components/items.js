import { Card, CardGroup } from "react-bootstrap";
import "./items.css";
import redshoe from "../images/redshoe.jpg";

function Items() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={redshoe} />
        <Card.Body>
          <Card.Title>Everyday Hoodie</Card.Title>
          <Card.Text>$45</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={redshoe} />
        <Card.Body>
          <Card.Title>Everyday t-shirt</Card.Title>
          <Card.Text>$25</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={redshoe} />
        <Card.Body>
          <Card.Title>Everyday pants</Card.Title>
          <Card.Text>$75</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Items;
