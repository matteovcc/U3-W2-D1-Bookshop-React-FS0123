import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import "../AllTheBooks.css";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row className="g-3">
          {fantasy.map((book, index) => (
            <Col xs={6} md={4} lg={3} key={`book-${index}`}>

              <SingleBook
              id={book.asin}
                img={book.img}
                title={book.title}
                price={book.price}
                category={book.category}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;