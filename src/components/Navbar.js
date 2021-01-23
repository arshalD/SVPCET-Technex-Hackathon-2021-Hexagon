import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"

function Navbar() {
  return (
    <>
      <nav className="navbar bg-dark navbar-dark">
        <Link to="/">
          Dashboard 
        </Link>
        <Link to="/analyser">
          Analyser
        </Link>
        <Link to="/newsFeed">
          News Feed
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
