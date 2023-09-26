import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom';
function Contact() {
    return (
        
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/login"
                    className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                    Login
                </NavLink>
                <NavLink
                    to="/register"
                    className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                    Register
                </NavLink>
            </nav>
        

    );
}

export default Contact;
