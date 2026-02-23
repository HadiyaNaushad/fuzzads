// Navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaSignInAlt, FaUserPlus, FaCogs, FaUser, FaSignOutAlt } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar({ user, setUser }) {
const [menuOpen, setMenuOpen] = useState(false);

function handleLogout() {
localStorage.removeItem("token");
localStorage.removeItem("user");
setUser(null);
window.location.href = "/";
}

return (
<nav className="navbar">
<h1 className="logo">FuzzAds</h1>

<div  
    className={`hamburger ${menuOpen ? "active" : ""}`}  
    onClick={() => setMenuOpen(!menuOpen)}  
  >  
    <span></span>  
    <span></span>  
    <span></span>  
  </div>  

  <ul className={`nav-links ${menuOpen ? "open" : ""}`}>  
    <li>  
      <Link to="/howitworks" onClick={() => setMenuOpen(false)}>  
        <FaUserPlus className="nav-icon" /> Work  
      </Link>  
    </li>  

    <li>  
      <Link to="/contact" onClick={() => setMenuOpen(false)}>  
        <FaCogs className="nav-icon" /> Services  
      </Link>  
    </li>  

    {user ? (  
      <>  
        <li>  
          <Link to="/profile" onClick={() => setMenuOpen(false)}>  
            <FaUser className="nav-icon" /> Profile  
          </Link>  
        </li>  

        <li>  
          <button className="logout-btn" onClick={handleLogout}>  
            <FaSignOutAlt className="nav-icon" /> Logout  
          </button>  
        </li>  
      </>  
    ) : (  
      <>  
        <li>  
          <Link to="/login" onClick={() => setMenuOpen(false)}>  
            <FaSignInAlt className="nav-icon" /> Login  
          </Link>  
        </li>  

        <li>  
          <Link to="/signup" onClick={() => setMenuOpen(false)}>  
            <FaUserPlus className="nav-icon" /> SignUp  
          </Link>  
        </li>  
      </>  
    )}  
  </ul>  
</nav>

);
}