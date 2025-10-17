import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem("darkMode") === "true"
    );

    useEffect(() => {
        document.body.classList.toggle("dark", darkMode);
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <nav className="navbar">
            <h1>InstaBoard</h1>
            <div className="nav-links">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/team">Team</NavLink>
                <NavLink to="/liked-users">Liked</NavLink>
            </div>
            <button
                className="theme-toggle"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
        </nav>
    );
};

export default Navigation;
