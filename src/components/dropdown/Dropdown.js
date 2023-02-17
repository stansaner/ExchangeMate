import * as React from "react";
import { useState } from "react";
import "./dropdown.css";


const Dropdown = () => {

  const [currencyA, setCurrencyA] = useState("USD");
  const [currencyB, setCurrencyB] = useState("USD");


  const handleFirstCurrency = (event) => {
    setCurrencyA(event.target.value);
  };

  const handleSecondCurrency = (event) => {
    setCurrencyB(event.target.value);
  };

  return (
    <div>
      <label>
        First Currency Choice
        <select value={currencyA} onChange={handleFirstCurrency}>
          <option value="USD">United States Dollar</option>
          <option value="GBP">Great British Pound</option>
          <option value="EUR">Euro</option>
          <option value="AUD">Australian Dollar</option>
          <option value="JPY">Japanese Yen</option>
        </select>
      </label>
      <label>
        Second Currency Choice
        <select value={currencyB} onChange={handleSecondCurrency}>
          <option value="USD">United States Dollar</option>
          <option value="GBP">Great British Pound</option>
          <option value="EUR">Euro</option>
          <option value="AUD">Australian Dollar</option>
          <option value="JPY">Japanese Yen</option>
        </select>
      </label>
      <p>First Currency {currencyA}!</p>
      <p>Second Currency {currencyB}!</p>
    </div>
  );
};


export default Dropdown;
