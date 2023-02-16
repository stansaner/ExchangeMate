import React from "react";
import "./landing.css";

import FetchCurrencies from "../../components/fetchCurrencies/fetchCurrencies";
import FetchAgg from "../../components/fetchagg/fetchAgg";


function Landing() {
  return (
    <>
      <h1>landing</h1>
      <FetchCurrencies />
      <FetchAgg />
    </>
  );
};

export default Landing;
