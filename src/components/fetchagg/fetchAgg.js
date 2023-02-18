import React from "react";
// UseEffect imported from react not used below
import { useEffect } from "react";
import "./fetchagg.css";

function FetchAgg(props) {

  function bringData() {
    fetch(`https://api.polygon.io/v2/aggs/ticker/C:${props.currencyA}${props.currencyB}/range/1/day/2023-01-02/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=VjdfKVQgSP7rYvGkgO1Cu789ZdvAj_ph`)
    .then(res => res.json())
      .then(data => {
          console.log(data); 
      })
  }

  return (
    <div>
      <h1>FetchAgg</h1>
      <button onClick={bringData}>Show rates</button>
    </div>
  );
};


export default FetchAgg;