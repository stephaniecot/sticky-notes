import React from "react";
import './AddPost.css';
import Button from './UI/Button/Button';
import ColorPicker from './UI/Form/ColorPicker';

const AddPost = (props) => {
  
  
    return (
        <div className='post-it-form' onClose={props.onClose}>
            <Button buttonHandler={props.onClose}>&times;</Button>
                <form onSubmit={props.formSubmitHandler}>
                <div className={`${'post-it'} ${props.color}`}>
                    <label>
                        Titre:
                        <input type="text" name="title" placeholder="Ajouter une note" onChange={props.titleOnChange} />
                    </label>
                    <label>
                        Contenu:
                        <textarea name="content" placeholder="Inscrire quelque chose..." onChange={props.contentOnChange} />
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
