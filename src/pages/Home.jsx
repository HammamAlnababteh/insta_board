import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/new_logo.jpg";

const Home = ({ toggleTheme }) => {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <div className="orbit">
                <img src={logo} alt="logo" className="logo" />
            </div>

            <h1>Welcome to InstaBoard</h1>
            <p>Explore team members, view details, and like your favorites!</p>

            <Link to="/team" className="back-link" style={{ marginTop: "20px", display: "inline-block" }}>
                Explore Team
            </Link>

            {toggleTheme && (
                <div style={{ marginTop: "20px" }}>
                    <button className="theme-toggle" onClick={toggleTheme}>
                        Toggle Theme
                    </button>
                </div>
            )}

            <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "40px", flexWrap: "wrap" }}>
                <div className="feature-card">
                    <h3>👥 View Members</h3>
                    <p>Browse all team members and their details.</p>
                </div>
                <div className="feature-card">
                    <h3>❤️ Like Favorites</h3>
                    <p>Save your favorite members for easy access.</p>
                </div>
                <div className="feature-card">
                    <h3>🔍 Search & Filter</h3>
                    <p>Quickly find members with our filters.</p>
                </div>
            </div>

            <p style={{ marginTop: "30px", fontStyle: "italic" }}>
                "Connecting people and ideas, one click at a time."
            </p>
        </div>
    );
};

export default Home;
