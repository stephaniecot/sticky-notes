import React from "react"
import { FaEdit } from "react-icons/fa";
import Card from "./UI/Card/Card";

const Post = (props) => {
    const variableClass = props.post.color;

    return (
        <Card customClass={variableClass} >
            <header>
            <span className='delete-button' onClick={() => props.handleOnDelete(props.post.id)}>&times;</span>
            <h2>{props.post.title}</h2>
            </header>
            <div className="post-it-content">
            <p>{props.post.content}</p>
            </div>
            <footer>
            <FaEdit className='edit-button' onClick={() => props.editPost(props.post.id)} />
            </footer>
        </Card>
    )
}
export default Post