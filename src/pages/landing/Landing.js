import React from "react";
import "./landing.css";

import FetchCurrencies from "../../components/fetchCurrencies/fetchCurrencies";
import FetchAgg from "../../components/fetchagg/fetchAgg";
import Dropdown from "../../components/dropdown/Dropdown";

function Landing() {
  return (
    <>
      <h1>landing</h1>
      <Dropdown />
      <FetchCurrencies />
      <FetchAgg />
    </>
  );
};

export default Landing;
