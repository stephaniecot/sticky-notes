import {
    Link
  } from "react-router-dom";
  import Button from "../components/UI/Button/Button";

const Navigation = () => {
    return (
        <nav>
        <Link to="/addPost">Ajouter un post</Link>
        </nav>
    )
}

export default Navigation