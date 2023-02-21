import * as React from "react";
// import { useState } from "react";
import "./dropdown.css";


const Dropdown = (props) => {

  const handleFirstCurrency = (event) => {
    props.setCurrencyA(event.target.value);
  };

  const handleSecondCurrency = (event) => {
    props.setCurrencyB(event.target.value);
  };

  return (
    <div id="currency-checker">
      <div className="currencyflex-item">
        <label>
          <div className="search-categories">
          <p>First Currency</p>
            <div className="select">
              <select className="dropdown-style" value={props.currencyA} onChange={handleFirstCurrency}>
                <option value="">Please select a currency</option>
                <option value="USD">United States Dollar</option>
                <option value="GBP">Great British Pound</option>
                <option value="EUR">Euro</option>
                <option value="AUD">Australian Dollar</option>
                <option value="JPY">Japanese Yen</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="CAD">Canadian Dollar</option>
              </select>
            </div>
          </div>
        </label>
      </div>

      <div className="currencyflex-item">
        <label> 
          
          <div className="search-categories">
          <p>Second Currency</p>
            <div className="select">
              <select className="dropdown-style" value={props.currencyB} onChange={handleSecondCurrency}>
              <option value="">Please select a currency</option>
                <option value="USD">United States Dollar</option>
                <option value="GBP">Great British Pound</option>
                <option value="EUR">Euro</option>
                <option value="AUD">Australian Dollar</option>
                <option value="JPY">Japanese Yen</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="CAD">Canadian Dollar</option>
              </select>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Dropdown;
