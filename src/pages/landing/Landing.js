import React from "react";
import { useState } from "react";
import "./landing.css";

import FetchCurrencies from "../../components/fetchCurrencies/fetchCurrencies";
import FetchAgg from "../../components/fetchagg/fetchAgg";
import Dropdown from "../../components/dropdown/Dropdown";
import ChartedData from "../../components/chartData/chartData";
// Imported moment.js
import moment from 'moment';

function Landing() {
  const [currencyA, setCurrencyA] = useState("USD");
  const [currencyB, setCurrencyB] = useState("USD");


  const today = moment();
  const dates = [];

  for (let day = 7; day >= 0; day--) {
    const date = moment(today).subtract(day, 'days').format('YYYY-MM-DD');
    dates.push(date); 
  }

 // console.log(dates);


  // Using setFetchedData function from useState to update fetchedData state
  const [fetchedData, setFetchedData] = useState('');

  // handleData function calls setFetchedData and passes it the data object as a property
  function handleData(data) {
    setFetchedData(data);
  }

  return (
    <>
      <h1>landing</h1>
      <p>First Currency {currencyA}</p>
      <p>Second Currency {currencyB}</p>
      <Dropdown currencyA={currencyA} currencyB={currencyB} setCurrencyA={setCurrencyA} setCurrencyB={setCurrencyB}/>
      <FetchCurrencies />
      <FetchAgg currencyA={currencyA} currencyB={currencyB} dates={dates} onDataFetch={handleData}/>
      <ChartedData dates={dates} fetchedData={fetchedData}/>
    </>
  );
};

export default Landing;
