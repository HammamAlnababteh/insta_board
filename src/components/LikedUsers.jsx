import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LikedUsers = () => {
    const [likedUsers, setLikedUsers] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("likedUsers")) || [];
        setLikedUsers(stored);
    }, []);

    const unlike = (email) => {
        const updated = likedUsers.filter((u) => u.email !== email);
        setLikedUsers(updated);
        localStorage.setItem("likedUsers", JSON.stringify(updated));
    };

    return (
        <div className="liked-page">
            <h2>❤️ Liked Users</h2>
            {likedUsers.length === 0 ? (
                <>
                    <p>No liked users yet.</p>
                    <Link to="/team" className="back-link">Go back to team</Link>
                </>
            ) : (
                <div className="team-grid">
                    {likedUsers.map((user, index) => (
                        <div key={index} className="user-card">
                            <img src={user.picture.large} alt="User" />
                            <h3>{user.name.first} {user.name.last}</h3>
                            <button onClick={() => unlike(user.email)}>Unlike</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LikedUsers;
