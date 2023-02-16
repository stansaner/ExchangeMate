import "./fetchCurrencies.css";
import { useState, useEffect } from 'react';



function FetchCurrencies() {
  useEffect(() => {
  fetch(`https://api.polygon.io/v3/reference/tickers?market=fx&active=true&apiKey=VjdfKVQgSP7rYvGkgO1Cu789ZdvAj_ph`)
  .then(res => res.json())
    .then(data => {
        console.log(data);

    })
  }, []);

  return (
    <h1>Test Fetch</h1>
  )
}

export default FetchCurrencies;
