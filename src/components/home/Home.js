import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function Home(){
    return(
<Card className="margeee grey-color" style={{ width: '18rem' }}>
  <Card.Body className="grey-color">
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    );
}
export default Home;