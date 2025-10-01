import React, { useState } from "react";
import "./UserCard.css";

export default function UserCard({ picture, name, email }) {
    const [likes, setLikes] = useState(0);
    const [showEmail, setShowEmail] = useState(false);

    return (
        <div className="user-card">
            <img src={picture} alt={name} />
            <h2>{name}</h2>
            {showEmail && <p>{email}</p>}

            <div>
                <button onClick={() => setLikes(likes + 1)}>
                    👍 Like {likes}
                </button>

                <button onClick={() => setShowEmail(!showEmail)}>
                    {showEmail ? "Hide Email" : "Show Email"}
                </button>
            </div>
        </div>
    );
}
