import React from "react";
// UseEffect imported from react not used below
import { useEffect } from "react";
import "./fetchagg.css";

function FetchAgg(props) {
  
  //Testing props passed
  //console.log(props.dates);

  function bringData() {
    fetch(`https://api.polygon.io/v2/aggs/ticker/C:${props.currencyA}${props.currencyB}/range/1/day/${props.dates[0]}/${props.dates[7]}?adjusted=true&sort=asc&limit=120&apiKey=VjdfKVQgSP7rYvGkgO1Cu789ZdvAj_ph`)
    .then(res => res.json())
      .then(data => {
        
        // pass the results object as a prop
        props.onDataFetch(data);

       // console.log(data); 
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