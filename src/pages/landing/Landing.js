import React from "react";
import { useState } from "react";
import "./landing.css";

import FetchCurrencies from "../../components/fetchCurrencies/fetchCurrencies";
import FetchAgg from "../../components/fetchagg/fetchAgg";
import Dropdown from "../../components/dropdown/Dropdown";

function Landing() {
  const [currencyA, setCurrencyA] = useState("USD");
  const [currencyB, setCurrencyB] = useState("USD");

  return (
    <>
      <h1>landing</h1>
      <p>First Currency {currencyA}</p>
      <p>Second Currency {currencyB}</p>
      <Dropdown currencyA={currencyA} currencyB={currencyB} setCurrencyA={setCurrencyA} setCurrencyB={setCurrencyB}/>
      <FetchCurrencies />
      <FetchAgg currencyA={currencyA} currencyB={currencyB}/>
    </>
  );
};

export default Landing;
