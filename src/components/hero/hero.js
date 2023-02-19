import React from "react";
import "./hero.css";



function Hero() {
  return (
    <>
      <header>
        <div className="flex-container">
          <div className="flex-item header-style">
            
            <h1>Welcome to  eXchangeMate</h1>
            <p>Money talks, and we're listening - compare the top currency exchange rates, all in one place.</p>
            <button className="currency-button"><a href="#currency-checker">Compare now</a></button>
          </div>
          <div className="flex-item image-style">
          {/* <FontAwesomeIcon icon={faCoins} size="8x" /> */}
          </div>
        </div>
        <div className="wave"></div>
      </header>
    </>
  );
}

export default Hero;
