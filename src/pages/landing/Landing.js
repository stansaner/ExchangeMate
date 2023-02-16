import React from "react";
import "./landing.css";

import FetchFx from "../../components/fetchfx/FetchFx";
import FetchAgg from "../../components/fetchagg/FetchAgg";


function Landing() {
  return (
    <>
      <h1>landing</h1>
      <FetchFx />
      <FetchAgg />
    </>
  );
};

export default Landing;
