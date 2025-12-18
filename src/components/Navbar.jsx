import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left */}
      <div className="nav-left">
        <span className="logo">StudyMate</span>
      </div>

      {/* Center */}
      <ul className="nav-links">
        <li>Home</li>
        <li>To-Do</li>
        <li>Timer</li>
        <li>Files</li>
        <li>Stats</li>
      </ul>

      {/* Right */}
      <div className="nav-right">
        <span>Profile</span>
        <span className="logout">Logout</span>
      </div>
    </nav>
  );
}

export default Navbar;
