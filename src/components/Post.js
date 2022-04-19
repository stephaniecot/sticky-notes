import React from "react"
import { useNavigate } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import Card from "./UI/Card/Card";
import Button from './UI/Button/Button';

const Post = (props) => {
    const navigate = useNavigate()
    const variableClass = props.post.color;

    return (
        <Card customClass={variableClass} >
            
            <span className='delete-button' onClick={() => props.handleOnDelete(props.post.id)}>&times;</span>
            <h2>{props.post.title}</h2> 
            <p>{props.post.content}</p>
            {/* <Button buttonHandler={() => navigate(`editPost/${props.post.id}`)}>Modifier la note</Button> */}
            
            {/* <Button buttonHandler={()=> props.editPost(props.post.id)}>Modifier la note</Button> */}

            <FaEdit className='edit-button' onClick={()=> props.editPost(props.post.id)} />
        </Card>
    )
}
export default Post