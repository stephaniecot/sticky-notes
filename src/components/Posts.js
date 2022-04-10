import React, { useEffect, useState } from "react";
import PostService from "../services/PostService";
import Post from './Post';
import Button from './UI/Button/Button';
import AddPost from "./AddPost";
import { useNavigate } from 'react-router-dom'

const Posts = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const [showAddPost, setOpenAddPost] = useState(false);


    const openAddPost = () => {
        setOpenAddPost(true);
      }
      
      const closeAddPost = () => {
        setOpenAddPost(false);
      }
      

    const fetchPosts = () => {
        PostService.getAllPosts().then(res => {
            setPosts(res.data)
        }).catch(e => console.warn(e.message))
    }

    const handleOnDelete = (id) => {
        PostService.deletePostById(id).then(() => {
            console.log('Supprimé avec succès')
            fetchPosts();
        }).catch(e => console.err(e.message))
    }
    


    const sortByCreatedAt = (thePosts) => thePosts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <>
            <h1>Mes Notes</h1>
            {/* <Button buttonHandler={() => navigate('/addPost')} >+</Button> */}
            <Button buttonHandler={openAddPost}>+</Button>
            {showAddPost && <AddPost onClose={closeAddPost} />}
            <div className='dashboard'>
                {posts.length > 0 && sortByCreatedAt(posts).map(p => 
                <Post key={p.id} post={p} handleOnDelete={handleOnDelete} />
                )}
            </div> 
        </>
    )
}

export default Posts