import React from "react";
// UseEffect imported from react not used below
import { useEffect } from "react";
import "./fetchagg.css";
import moment from 'moment';

function FetchAgg(props) {
  
  //Testing props passed
  //console.log(props.dates);

  const time = moment();
  const today = moment(time).format('YYYY-MM-DD');
  const weekAgo = moment(time).subtract(7, 'days').format('YYYY-MM-DD');
  //console.log(weekAgo);

  // for (let day = 7; day >= 0; day--) {
  //   const date = moment(today).subtract(day, 'days').format('YYYY-MM-DD');
  //   dates.push(date); 
  // }

  function bringData() {
    fetch(`https://api.polygon.io/v2/aggs/ticker/C:${props.currencyA}${props.currencyB}/range/1/day/${weekAgo}/${today}?adjusted=true&sort=asc&limit=120&apiKey=VjdfKVQgSP7rYvGkgO1Cu789ZdvAj_ph`)
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