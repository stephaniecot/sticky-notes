
import React, { useEffect, useState } from "react";
import PostService from "../services/PostService";
import Post from './Post';
import Button from './UI/Button/Button';
import AddPost from "./AddPost";
import EditPost from "./EditPost";
import { useNavigate } from 'react-router-dom'
import Axios from "axios"

const Posts = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState()
    const [showAddPost, setShowAddPost] = useState(false);
    const [showEditPost, setShowEditPost] = useState(false);


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
        setHasError(false)
    }


    const openEditPost = (id) => {
        setShowEditPost(true);
        PostService.getPost(id).then(res => {
            setPost(res.data)
            setTitle(res.data.title)
            setContent(res.data.content)
            setColor(res.data.color)
        }).catch(e => console.warn(e.message))
        console.log(id)

    }

    const closeEditPost = () => {
        setShowEditPost(false);
        setHasError(false);
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

    const formSubmitHandler = (e) => {
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

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (title.trim() === '' || content.trim() === '' || !color) {
            setHasError(true)
            return;
        }

        setHasError(false)

        const updatedPost = {
            id: post.id,
            title,
            createdAt: post.createdAt,
            content,
            color
        }

        Axios.patch(`http://localhost:3004/posts/${updatedPost.id}`, updatedPost).then(() => {
            fetchPosts()
            setShowEditPost(false)
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
            <h1>Mon Babillard</h1>
            {/* <Button buttonHandler={() => navigate('/addPost')} >+</Button> */}
            {!showAddPost && !showEditPost && <Button buttonHandler={openAddPost}>+</Button>}
            {showAddPost &&
                <AddPost
                    onClose={closeAddPost}
                    formSubmitHandler={formSubmitHandler}
                    titleOnChange={titleTarget}
                    contentOnChange={contentTarget}
                    colorOnChange={colorTarget}
                    color={color}
                    hasError={hasError} 
                    />}
                    {showEditPost &&
                    <EditPost
                        onClose={closeEditPost}
                        handleOnSubmit={handleOnSubmit}
                        title={title}
                        titleOnChange={titleTarget}
                        content={content}
                        contentOnChange={contentTarget}
                        colorOnChange={colorTarget}
                        color={color}
                        hasError={hasError} 
                        
                    />}
            <div className='dashboard'>
                {posts.length > 0 && sortByCreatedAt(posts).map(p =>
                    <Post
                        key={p.id}
                        post={p}
                        handleOnDelete={handleOnDelete}
                        editPost={openEditPost}
                    />
                )}
            </div>
        </>
    )
}

export default Posts