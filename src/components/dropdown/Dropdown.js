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
    <div>
      <label>
        First Currency Choice
        <select value={props.currencyA} onChange={handleFirstCurrency}>
          <option value="USD">United States Dollar</option>
          <option value="GBP">Great British Pound</option>
          <option value="EUR">Euro</option>
          <option value="AUD">Australian Dollar</option>
          <option value="JPY">Japanese Yen</option>
        </select>
      </label>
      <label>
        Second Currency Choice
        <select value={props.currencyB} onChange={handleSecondCurrency}>
          <option value="USD">United States Dollar</option>
          <option value="GBP">Great British Pound</option>
          <option value="EUR">Euro</option>
          <option value="AUD">Australian Dollar</option>
          <option value="JPY">Japanese Yen</option>
        </select>
      </label>
    </div>
  );
};

export default Dropdown;
