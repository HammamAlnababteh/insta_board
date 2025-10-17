import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Team = () => {
    const [users, setUsers] = useState([]);
    const [resultsCount, setResultsCount] = useState(12);

    useEffect(() => {
        fetchUsers();
    }, [resultsCount]);

    const fetchUsers = async () => {
        const res = await axios.get(`https://randomuser.me/api/?results=${resultsCount}`);
        setUsers(res.data.results);
    };

    const handleLike = (user) => {
        let liked = JSON.parse(localStorage.getItem("likedUsers")) || [];
        if (!liked.find((u) => u.email === user.email)) {
            liked.push(user);
            localStorage.setItem("likedUsers", JSON.stringify(liked));
        }
    };

    return (
        <div className="team-page">
            <h2>Team Members</h2>
            <div className="controls">
                <label>Number of Results: </label>
                <input
                    type="number"
                    min="1"
                    max="100"
                    value={resultsCount}
                    onChange={(e) => setResultsCount(e.target.value)}
                />
                <button onClick={fetchUsers}>Load More</button>
            </div>

            <div className="team-grid">
                {users.map((user, index) => (
                    <div key={index} className="user-card">
                        <img src={user.picture.large} alt="User" />
                        <h3>{user.name.first} {user.name.last}</h3>
                        <button onClick={() => handleLike(user)}>❤️ Like</button>
                        <Link to={`/team/${user.login.uuid}`} state={{ user }}>
                            View Profile
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
