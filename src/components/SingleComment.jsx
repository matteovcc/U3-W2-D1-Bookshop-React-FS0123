import { ListGroup } from "react-bootstrap";
import {Component} from "react"

class SingleComment extends Component{
    render(){
        return(
            <>
            <ListGroup.Item>{this.props.comment}</ListGroup.Item>
            </>
        )
    }
}

export default SingleComment