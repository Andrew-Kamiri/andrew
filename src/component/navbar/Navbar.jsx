import "./Navbar.scss";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const linkstyle = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    fontSize: "1.1rem",
  };
  const linkstyle2 = {
    textDecoration: "none",
    color: "grey",
  };
  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          <span>F</span>ashion
        </h1>
      </div>
      <div className="middle">
        <ul>
          <li>
            <Link style={linkstyle}>Home</Link>
          </li>
          <li>
            <Link style={linkstyle}>Men</Link>
          </li>
          <li>
            <Link style={linkstyle}>Pages</Link>
          </li>
          <li>
            <Link style={linkstyle}>Contact</Link>
          </li>
          <li>
            <Link style={linkstyle}>Women</Link>
          </li>
          <li>
            <Link style={linkstyle}>Shop</Link>
          </li>
          <li>
            <Link style={linkstyle}>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="middle2">
        <ul>
          <li>
            <Link style={linkstyle2}>Login</Link>
          </li>
          <li>
            <Link style={linkstyle2}>Register</Link>
          </li>

          <li>
            <FiSearch />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
