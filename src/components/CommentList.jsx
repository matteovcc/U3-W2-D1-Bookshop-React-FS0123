import {Component} from "react"
import { ListGroup} from "react-bootstrap"
import SingleComment from "./SingleComment"

class CommentList extends Component {
    render(){
        return (
      <ListGroup className="mt-3">
        {this.props.comment.map((book) =>
        <ListGroup.Item>
          <SingleComment comment={book.comment}></SingleComment>
        </ListGroup.Item>
        )}
        </ListGroup>
    )}

}

export default CommentList;