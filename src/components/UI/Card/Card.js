import './Card.css';

const Card = (props) => {
    
    return (
        <div className={`post-it ${props.customClass}`}>
            {props.children}
        </div>
    )
}

export default Card;