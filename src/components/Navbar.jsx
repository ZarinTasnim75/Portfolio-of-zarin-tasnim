import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Zarin<span>.</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/#home">Home</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#skills">Skills</Link></li>
        <li><Link to="/#education">Education</Link></li>
        <li><Link to="/#projects">Projects</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;