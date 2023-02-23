import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";



function Header() {
  return (
    <>
      {/* <nav className="container nav-container nav-style">
        <ul class="navbar-nav navbar-right">
          <li>
            <h4>eXchangeMate</h4>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <header></header> */}
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          <FontAwesomeIcon icon={faCoins} size="2x" />
          <h1>
            e<span className="nav-highlight">X</span>changeMate
          </h1>
        </a>
        <div className="navbar-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;
