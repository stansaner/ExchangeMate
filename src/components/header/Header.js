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
      <nav class="navbar">
        <a class="navbar-brand" href="#">
          <FontAwesomeIcon icon={faCoins} size="2x" />
          <h1>
            e<span class="nav-highlight">X</span>changeMate
          </h1>
        </a>
        <div class="navbar-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
        </div>
      </nav>
      {/* Header begins here */}
      
      <header>
        <div className="flex-container">
          <div className="flex-item header-style">
            
            <h1>Welcome to  eXchangeMate</h1>
            <p>Money talks, and we're listening - compare the top currency exchange rates, all in one place.</p>
            <button class="currency-button"><a href="#currency-checker">Compare now</a></button>
          </div>
          <div className="flex-item image-style">
          {/* <FontAwesomeIcon icon={faCoins} size="8x" /> */}
          </div>
        </div>
        <div className="wave"></div>
      </header>

      {/* Header ends here */}
    </>
  );
}

export default Header;
