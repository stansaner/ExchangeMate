import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
    <div className="container nav-container">
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
    </div>
    </>
  );
}

export default Header;