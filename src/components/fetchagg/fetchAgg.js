import React from "react";
// UseEffect imported from react not used below
import { useState } from "react";
import "./fetchagg.css";
import moment from 'moment';
import ChartedData from "../../components/chartData/chartData";

function FetchAgg(props) {

  const [showChart, setShowChart] = useState(false);

  const time = moment();
  const today = moment(time).format('YYYY-MM-DD');
  const monthAgo = moment(time).subtract(1, 'month').format('YYYY-MM-DD');
  //console.log(weekAgo);

  function bringData() {
    fetch(`https://api.polygon.io/v2/aggs/ticker/C:${props.currencyA}${props.currencyB}/range/1/day/${monthAgo}/${today}?adjusted=true&sort=asc&limit=120&apiKey=VjdfKVQgSP7rYvGkgO1Cu789ZdvAj_ph`)
    .then(res => res.json())
      .then(data => {
        
        // pass the results object as a prop
        props.onDataFetch(data);

       // console.log(data); 

       setShowChart(true)
      })
  }

  return (
    <div>
      <h1>FetchAgg</h1>
      <button onClick={bringData}>Show rates</button>
      {showChart && <ChartedData fetchedData={props.onDataFetch}/>}
    </div>
  );
};


export default FetchAgg;