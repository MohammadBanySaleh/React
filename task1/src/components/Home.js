import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom';
import NavBar from './NavBar';
function Home() {
    return (
        <div>
            <NavBar />
            <div className="content">
                <h1>Home</h1>
                <p>Welcome to Our Website</p>
            </div>
        </div>
    );
}

export default Home;
