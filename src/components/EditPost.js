import React from "react";
import Button from './UI/Button/Button';
import ColorPicker from './UI/Form/ColorPicker';


const EditPost = (props) => {

    return (
        <div className='post-it-form' onClose={props.onClose}>
            <Button buttonHandler={props.onClose}>&times;</Button>
            <form onSubmit={props.formEditHandler}>
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
                {props.hasError && <p className="error-msg">Veuillez compléter tous les champs</p>}
                <Button type='submit'>&#10004;</Button>
            </form>
        </div>
    )
}

export default EditPost