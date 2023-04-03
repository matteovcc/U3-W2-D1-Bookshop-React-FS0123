import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
function WithHeaderStyledExample() {
  return (
    <Container className="mt-3">
      <Card>
        <Card.Header as="h1">Shop Libri Fantasy 📖</Card.Header>
        <Card.Body>
          <Card.Text>I migliori libri fantasy del momento 🪄</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default WithHeaderStyledExample;