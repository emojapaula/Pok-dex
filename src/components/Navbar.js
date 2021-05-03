import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="left">
        <Link to="/">Home</Link>
        <Link to="/about">About Pokemon Trainer</Link>
      </div>
      <div className="right">
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
};

//kada ovo stavim unutar <Nav> javi mi da ne smijem koristiti link elements outside router
/* */
export default Navbar;
