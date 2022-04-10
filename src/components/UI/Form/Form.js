import Modal from "./Modal";
import './Form.css'

const Form = (props) => {

    return (
        <Modal onClose={props.onClose}>
                <h2>props.title</h2>
                
                <form onSubmit={props.formAction}>
                <div className={`${'post-it'} ${props.color}`}>
                    <label>
                        Titre:
                        <input type="text" name="title" onChange={e => setTitle(e.target.value)} />
                    </label>
                    <label>
                        Contenu:
                        <textarea name="content" onChange={e => setContent(e.target.value)} />
                    </label>
                    </div>
                    <div className="color-picker" onChange={e => setColor(e.target.id)}>

                        <input type="radio" name="color" id="banana" />
                        <label htmlFor="banana" className="banana" />

                        <input type="radio" name="color" id="pink" />
                        <label htmlFor="pink" className="pink" />

                        <input type="radio" name="color" id="aqua" />
                        <label htmlFor="aqua" className="aqua" />

                        <input type="radio" name="color" id="lavender" />
                        <label htmlFor="lavender" className="lavender" />
                    </div>
                    <Button type='submit'>&#10004;</Button>
                </form>
                </Modal>
          
    )
}

export default Form;