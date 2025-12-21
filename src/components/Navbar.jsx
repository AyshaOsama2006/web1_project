import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">StudyMate</span>
      </div>

      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/todoList">To Do</Link>
        <Link to="/">Logout</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/statisticsScreen">statistics</Link>
      </div>
    </nav>
  );
}

export default Navbar;


