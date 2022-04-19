import React from "react";
import Posts from "./Posts";

import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <Posts />
    )
}

export default Home