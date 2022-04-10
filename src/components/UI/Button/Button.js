import './Button.css';

const Button = props => 
        <div>
            <button className='button' onClick={props.buttonHandler}>{props.children}</button>
        </div>
    


export default Button;