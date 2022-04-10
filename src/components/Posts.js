import React, { useEffect, useState } from "react";
import PostService from "../services/PostService";
import Post from './Post';

const Posts = () => {

    const [posts, setPosts] = useState([])
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
            <h1>List of posts</h1>
            <div className='dashboard'>
                {posts.length > 0 && sortByCreatedAt(posts).map(p => <Post key={p.id} post={p} handleOnDelete={handleOnDelete} />)}
            </div>
        </>
    )
}

export default Posts