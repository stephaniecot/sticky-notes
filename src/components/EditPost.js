import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostService from "../services/PostService";
import Button from './UI/Button/Button';
import ColorPicker from './UI/Form/ColorPicker';
import Axios from "axios"

const EditPost = (props) => {
    const params = useParams()
    const [post, setPost] = useState()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [color, setColor] = useState('')
    const navigate = useNavigate();

    const [hasError, setHasError] = useState(null)

    console.log(params)

    useEffect(() => {
        PostService.getPost(params.id).then(res => {
            setPost(res.data)
            setTitle(res.data.title)
            setContent(res.data.content)
            setColor(res.data.color)
        }).catch(e => console.warn(e.message))
    }, [params.id])

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if(title.trim() === '' || content.trim() === '' || !color) {
            setHasError(true)
            return;
        }

        setHasError(false)

        const updatedPost = {
            id: post.id,
            title,
            createdAt: post.createdAt,
            content,
            color
        }

        Axios.patch(`http://localhost:3004/posts/${updatedPost.id}`, updatedPost).then(() => {
           navigate('/posts/')
        }).catch(e => {
            console.error(e.message)
        })
     
    }

    return (
       
            <div className='post-it-form' onClose={props.onClose}>
                    <Button buttonHandler={props.onClose}>&times;</Button>
                    <form onSubmit={props.handleOnSubmit}>
                    <div className={`${'post-it'} ${props.color}`}>
                        <label>
                            Titre:
                            <input type="text" name="title" placeholder="Ajouter un titre" value={props.title} onChange={props.titleOnChange} />
                        </label>
                        <label>
                            Contenu:
                            <textarea name="content" placeholder="Inscrire quelque chose..." value={props.content} onChange={props.contentOnChange} />
                        </label>
                        </div>
                        <ColorPicker onChange={props.colorOnChange} />
                      <Button type='submit'>&#10004;</Button>
                       { hasError && <p>Veuillez compléter tous les champs</p> }
                       
                    </form>
                    </div>
              
        
    )
}

export default EditPost