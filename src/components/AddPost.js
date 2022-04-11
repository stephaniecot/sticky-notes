import React from "react";
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import Axios from "axios"
import './AddPost.css';
import Button from './UI/Button/Button';
import ColorPicker from './UI/Form/ColorPicker';

const AddPost = (props) => {
  
  
    return (
        <div className='post-it-form' onClose={props.onClose}>
            <Button buttonHandler={props.onClose}>&times;</Button>
              {/* <span onClick={props.onClose} className="close">&times;</span> */}
                <h2>Ajouter une note</h2>
                
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
                   { props.hasError && <p>Veuillez compléter tous les champs</p> }
                   
                </form>
                </div>
          
    )
}

export default AddPost
