import React from "react";

import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Login</h1>
            <form className="login">
            <input type="email" />
            <input type="password" />
            </form>
            <button onClick={() => navigate('/posts/')}>Login</button>
        </div>
    )
}

export default Home