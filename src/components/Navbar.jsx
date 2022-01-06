import { Link } from "react-router-dom";

export const Navbar = () => {
    return <div>
        <Link to="/" style={{margin: '10px'}}>Home</Link>
        <Link to="/login" style={{margin: '10px'}}>Login</Link>
        <Link to="/dashboard" style={{margin: '10px'}}>Dashboard</Link>
    </div>
}