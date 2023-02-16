import "./fetchCurrencies.css";

function fetchCurrencies() {
  fetch(`https://api.polygon.io/v3/reference/tickers?market=fx&active=true&apiKey=VjdfKVQgSP7rYvGkgO1Cu789ZdvAj_ph`)
  .then(res => res.json())
  .then(data => {
      console.log(data);
  })
}

export default fetchCurrencies;
