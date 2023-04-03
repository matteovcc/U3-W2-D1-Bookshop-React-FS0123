import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: null,
    selected: false,
  };

  componentDidMount() {
    console.log("mounting");
    this.postComments();
  }

  postComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
        {
          Method: "POST",
          body: JSON.stringify({
            comment: this.state.comment,
          }),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYmYyMjE1ZjQzMjAwMTRhNzg2Y2EiLCJpYXQiOjE2ODA1MjMwNDMsImV4cCI6MTY4MTczMjY0M30.xwW-DuuSEs04i-3m7edBFIhcf8wnJJ1zrt6Pdr-w1p8",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("dati ottenuti", data);
        this.setState({ comment: data });
        console.log("setState avvenuto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.postComments();
  };

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };
  render() {
    return (
      <>
        <Button onClick={this.handleClick} className="mt-3">
          Add a comment
        </Button>
        <Form className="" onSubmit={this.handleSubmit}>
          <Form.Group className="mt-2">
            <Form.Control
              type="text "
              placeholder="nuovo commento..."
                value={this.state.comment}
            //   onChange={(e) => {
            //     this.setState({ comment: e.target.value });
            //   }}
            onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default AddComment;
