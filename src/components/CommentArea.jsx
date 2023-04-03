// import ListGroup from "react-bootstrap/ListGroup";
import CommentList from "./CommentList"
import AddComment from "./AddComment"
import { Component } from "react";


class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount  ()  {
    console.log("mounting");
    this.fetchComments();
  };

  fetchComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYmYyMjE1ZjQzMjAwMTRhNzg2Y2EiLCJpYXQiOjE2ODA1MjMwNDMsImV4cCI6MTY4MTczMjY0M30.xwW-DuuSEs04i-3m7edBFIhcf8wnJJ1zrt6Pdr-w1p8",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("dati ottenuti", data);
        this.setState({ comments: data });
        console.log("setState avvenuto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log("renderizzando");
    return (
        <>

        <CommentList comment={this.state.comments} />
        <AddComment id={this.props.id}/>
        
        </>
    
    );
  }
}

export default CommentArea;