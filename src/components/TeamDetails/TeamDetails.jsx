import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TeamDetails = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const user = state?.user;

    if (!user) return <p>User data not found.</p>;

    return (
        <div className="details" >
            <img src={user.picture.large} alt="User" />
            <h2>{user.name.first} {user.name.last}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Country:</strong> {user.location.country}</p>
            <button onClick={() => navigate(-1)}>⬅ Back</button>
        </div>
    );
};

export default TeamDetails;
