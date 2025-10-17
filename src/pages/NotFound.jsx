import { Link } from "react-router-dom";

const NotFound = () => (
    <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>404 - Page Not Found</h1>
        <Link to="/" style={{ color: "#007bff" }}>Go Home</Link>
    </div>
);

export default NotFound;
