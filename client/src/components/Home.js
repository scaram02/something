import React, { Component } from 'react'
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
             <h1>home</h1>
             <Link to='/login'>Log in</Link>
                <br/>
                <Link to='/signup'>sign up</Link>
        </div>
    )
}

export default Home