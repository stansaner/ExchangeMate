import React from "react";
import { useState } from "react";
import "./landing.css";

// import FetchCurrencies from "../../components/fetchCurrencies/fetchCurrencies";
import FetchAgg from "../../components/fetchagg/fetchAgg";
import Dropdown from "../../components/dropdown/Dropdown";
import ChartedData from "../../components/chartData/chartData";


function Landing() {
  const [currencyA, setCurrencyA] = useState("USD");
  const [currencyB, setCurrencyB] = useState("USD");
  const [showChart, setShowChart] = useState(false);


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
      <FetchAgg currencyA={currencyA} currencyB={currencyB} onDataFetch={handleData} showChart={showChart} setShowChart={setShowChart}/>
      {showChart && <ChartedData showChart={showChart} setShowChart={setShowChart} fetchedData={fetchedData}/>}
    </>
  );
};

export default Landing;
