import {
    Link
  } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Liste des posts</Link>
        <Link to="/addPost">Ajouter un post</Link>
        </nav>
    )
}

export default Navigation