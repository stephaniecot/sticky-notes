import './Button.css';

const Button = props => 
        <div className='button-wrapper'>
            <button className='button' onClick={props.buttonHandler}>{props.children}</button>
        </div>
    


export default Button;