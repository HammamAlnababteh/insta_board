import React from "react";

const About = () => (
    <div style={{ textAlign: "center", padding: "50px" }}>
        <div style={{ fontSize: "50px", marginBottom: "20px" }}>📋</div>

        <h1>About InstaBoard</h1>

        <p style={{ maxWidth: "600px", margin: "20px auto", lineHeight: "1.6", fontSize: "1.1rem" }}>
            InstaBoard is a dynamic app that showcases random team members using an API.
            You can <strong>view profiles</strong>, <strong>like your favorites</strong>, and
            explore all the amazing people in your team. 🚀
        </p>

        <p style={{ marginTop: "30px", fontStyle: "italic", color: "#2563eb" }}>
            "Connecting people and ideas, one click at a time."
        </p>
    </div>
);

export default About;
