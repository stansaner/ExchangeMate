import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="container nav-container">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/testpage">Test Page</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
