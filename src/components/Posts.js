import React, { useEffect, useState } from "react";
import PostService from "../services/PostService";
import Post from './Post';
import Button from './UI/Button/Button';
import AddPost from "./AddPost";
import { useNavigate } from 'react-router-dom'
import Axios from "axios"

const Posts = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const [showAddPost, setShowAddPost] = useState(false);


    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [color, setColor] = useState('')
    const randomId = (Math.random() + 1).toString(36).substring(7)

    const [hasError, setHasError] = useState(null)

    const titleTarget = (e) => setTitle(e.target.value)
    const contentTarget = (e) => setContent(e.target.value)
    const colorTarget = (e) => setColor(e.target.id)


    const openAddPost = () => {
        setShowAddPost(true);
    }

    const closeAddPost = () => {
        setShowAddPost(false);
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

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (title.trim() === '' || content.trim() === '' || !color) {
            setHasError(true)
            return;
        }

        setHasError(false)

        const post = {
            id: randomId,
            title,
            createdAt: new Date(),
            content,
            color
        }

        Axios.post('http://localhost:3004/posts', post).then(() => {
            fetchPosts()
            setShowAddPost(false)
        }).catch(e => {
            console.error(e.message)
        })

    }


    const sortByCreatedAt = (thePosts) => thePosts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <>
            <h1>Mes Notes</h1>
            {/* <Button buttonHandler={() => navigate('/addPost')} >+</Button> */}
            {!showAddPost && <Button buttonHandler={openAddPost}>+</Button>}
            {showAddPost && 
            <AddPost
                onClose={closeAddPost}
                handleOnSubmit={handleOnSubmit}
                titleOnChange={titleTarget}
                contentOnChange={contentTarget}
                colorOnChange={colorTarget}
                color={color}
                hasError={hasError} />}
            <div className='dashboard'>

                {posts.length > 0 && sortByCreatedAt(posts).map(p =>
                    <Post key={p.id} post={p} handleOnDelete={handleOnDelete} />
                )}
            </div>
        </>
    )
}

export default Posts