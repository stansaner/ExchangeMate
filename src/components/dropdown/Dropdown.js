import * as React from "react";
// import { useState } from "react";
import "./dropdown.css";


const Dropdown = (props) => {

  const handleFirstCurrency = (event) => {
    //REFACTOR

    // props.setCurrencyA(event.target.value);

    // console.log(currA)

    //Spread operator to modify one property from the currencyObj i.e., currencyA
    props.setCurrencyObj({...props.currencyObj, currencyA: event.target.value});
  };

  const handleSecondCurrency = (event) => {
    //REFACTOR

    // props.setCurrencyB(event.target.value);

    // console.log(currB)

    //Spread operator to modify one property from the currencyObj i.e., currencyA
    props.setCurrencyObj({...props.currencyObj, currencyB: event.target.value});

  };

  const currA = props.currencyObj.currencyA

  const currB = props.currencyObj.currencyB


  // function to create options in dropdown menu

  const printSelectOptions = () => {

    const selectCurrencyArr = [['USD', 'United States Dollar'], ['GBP', 'Great British Pound'], ['EUR', 'Euro'], ['AUD', 'Australian Dollar'], ['JPY', 'Japanese Yen'], ['NZD', 'New Zealand Dollar'], ['CAD', 'Canadian Dollar']];

    let selectOptionsA = [];

    let selectOptionsB = [];

    for (var i in selectCurrencyArr) {

      let item = selectCurrencyArr[i];

      const isSameA = selectCurrencyArr[i][0] == currA;

      const isSameB = selectCurrencyArr[i][0] == currB;
      
      if (!isSameB)selectOptionsA.push(<option value={item[0]}>{item[1]}</option>);

      if (!isSameA) selectOptionsB.push(<option value={item[0]}>{item[1]}</option>);
    }

    return [selectOptionsA, selectOptionsB];

  }


  return (
    <div id="currency-checker">
      <div className="currencyflex-item">
        <label>
          <div className="search-categories">
          <p>First Currency</p>
            <div className="select">
            {/* REFACTOR */}
              <select className="dropdown-style" value={currA} onChange={handleFirstCurrency}>
                <option value="">Please select a currency</option>
                {/* <option value="USD">United States Dollar</option>
                <option value="GBP">Great British Pound</option>
                <option value="EUR">Euro</option>
                <option value="AUD">Australian Dollar</option>
                <option value="JPY">Japanese Yen</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="CAD">Canadian Dollar</option> */}

               { 
               printSelectOptions()[0]
               }

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
               {/* REFACTOR */}
              <select className="dropdown-style" value={currB} onChange={handleSecondCurrency}>
              <option value="">Please select a currency</option>
               {/* <option value="">Please select a currency</option>
                <option value="USD">United States Dollar</option>
                <option value="GBP">Great British Pound</option>
                <option value="EUR">Euro</option>
                <option value="AUD">Australian Dollar</option>
                <option value="JPY">Japanese Yen</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="CAD">Canadian Dollar</option> */}

                {/* logic so currency only appears if not selected as the first currency */}
                {/* {(currA !== 'USD') && <option value="USD">United States Dollar</option>}
                {(currA !== 'GBP') && <option value="GBP">Great British Pound</option>}
                {(currA !== 'EUR') && <option value="EUR">Euro</option>}
                {(currA !== 'AUD') && <option value="AUD">Australian Dollar</option>}
                {(currA !== 'JPY') && <option value="JPY">Japanese Yen</option>}
                {(currA !== 'NZD') && <option value="NZD">New Zealand Dollar</option>}
                {(currA !== 'CAD') && <option value="CAD">Canadian Dollar</option>} */}

                { 
               printSelectOptions()[1]
                }
              </select>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Dropdown;
