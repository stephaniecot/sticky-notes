import {
    Routes,
    Route
  } from "react-router-dom";
import AddPost from "../components/AddPost";
import Home from "../components/Home";
import Posts from "../components/Posts";
import EditPost from "../components/EditPost";

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/addPost" element={<AddPost />} />
            <Route exact path="/posts/editPost/:id" element={<EditPost />} />
        </Routes>
    )
}

export default AppRouter