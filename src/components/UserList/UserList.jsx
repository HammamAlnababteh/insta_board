import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../UserCard/UserCard";
import "./UserList.css";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    const fetchData = async () => {
        try {
            const response = await axios.get("https://randomuser.me/api/?results=12");
            setUsers((prev) => [...prev, ...response.data.results]);
        } catch (error) {
            console.log("Error fetching users", error);
        }
    };

    // استدعاء البيانات أول مرة
    useEffect(() => {
        fetchData();
    }, []);

    const filteredUsers = users.filter((user) =>
        `${user.name.first} ${user.name.last}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="user-list">
            <input
                type="text"
                placeholder="Search by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="cards-container">
                {filteredUsers.map((user, index) => (
                    <UserCard
                        key={index}
                        picture={user.picture.medium}
                        name={`${user.name.first} ${user.name.last}`}
                        email={user.email}
                    />
                ))}
            </div>

            <button onClick={fetchData} className="load-more">
                Load more
            </button>
        </div>
    );
}
