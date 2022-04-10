import React from "react";
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import Axios from "axios"
import './AddPost.css';
import Button from './UI/Button/Button';
import ColorPicker from './UI/Form/ColorPicker';



const AddPost = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [color, setColor] = useState('')
    const randomId = (Math.random() + 1).toString(36).substring(7)

    const [hasError, setHasError] = useState(null)
    const navigate = useNavigate();


   

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if(title.trim() === '' || content.trim() === '' || !color) {
            setHasError(true)
            return;
        }

        setHasError(false)

        const post = {
            id: randomId,
            title,
            createdAt: new Date(),
            content,
            color
        }

        Axios.post('http://localhost:3004/posts', post).then(() => {
            navigate('/posts/')
        }).catch(e => {
            console.error(e.message)
        })
     
    }

  
    return (
        <div onClose={props.onClose}>
                <h2>Ajouter une note</h2>
                
                <form onSubmit={handleOnSubmit}>
                <div className={`${'post-it'} ${color}`}>
                    <label>
                        Titre:
                        <input type="text" name="title" placeholder="Ajouter un titre" value={title} onChange={e => setTitle(e.target.value)} />
                    </label>
                    <label>
                        Contenu:
                        <textarea name="content" placeholder="Inscrire quelque chose..." value={content} onChange={e => setContent(e.target.value)} />
                    </label>
                    </div>
                    <ColorPicker onChange={e => setColor(e.target.id)} />
                  <Button type='submit'>&#10004;</Button>
                   { hasError && <p>Veuillez compléter tous les champs</p> }
                   
                </form>
                </div>
          
    )
}

export default AddPost
