import React from "react";
// UseEffect imported from react not used below
import { useState } from "react";
import "./fetchagg.css";
import moment from "moment";
//import ChartedData from "../../components/chartData/chartData";

const rangeValues = ["week", "month", "threeMonths", "sixMonths", "year"];

function FetchAgg(props) {
  // Time variables to be used by the slider or radio buttons
  // to set time range for bringing the data
  const time = moment();
  const today = moment(time).format("YYYY-MM-DD");
  const weekAgo = moment(time).subtract(1, "week").format("YYYY-MM-DD");
  const monthAgo = moment(time).subtract(1, "month").format("YYYY-MM-DD");
  const threeMonthsAgo = moment(time).subtract(3, "month").format("YYYY-MM-DD");
  const sixMonthsAgo = moment(time).subtract(6, "month").format("YYYY-MM-DD");
  const yearAgo = moment(time).subtract(1, "year").format("YYYY-MM-DD");
  const [from, setFrom] = useState(weekAgo);

  // NEXT STEPS  possibly user cam change start and end date
  const [range, setRange] = useState(0);
  const handleDateSlider = (event) => {
    const index = parseInt(event.target.value);
    setRange(index);

    console.log(index);

    // if (index === 0) {
    //   from = weekAgo;
    //   console.log(from);
    // } else if (index === 1) {
    //   from = monthAgo;
    //   console.log(from);
    // } else if (index === 2) {
    //   from = threeMonthsAgo;
    //   console.log(from);
    // } else if (index === 3) {
    //   from = sixMonthsAgo;
    //   console.log(from);
    // } else if (index === 4) {
    //   from = yearAgo;
    //   console.log(from);
    // }

    switch (index) {
      case 0:
        setFrom(weekAgo);
        console.log(from);
        break;
      case 1:
        setFrom(monthAgo);
        console.log(from);
        break;
      case 2:
        setFrom(threeMonthsAgo);
        console.log(from);
        break;
      case 3:
        setFrom(sixMonthsAgo);
        console.log(from);
        break;
      case 4:
        setFrom(yearAgo);
        console.log(from);
        break;
    }
  };

  //console.log(weekAgo);

  function bringData() {
    fetch(
      `https://api.polygon.io/v2/aggs/ticker/C:${props.currencyA}${props.currencyB}/range/1/day/${from}/${today}?adjusted=true&sort=asc&limit=120&apiKey=VjdfKVQgSP7rYvGkgO1Cu789ZdvAj_ph`
    )
      .then((res) => res.json())
      .then((data) => {
        // pass the results object as a prop
        props.onDataFetch(data);
        // console.log(data);
        props.setShowChart(true);
        //props.chartStatus(showChart);
        return data;
      });
  }
  return (
    <div className="showrates-style">
      <p>TESTING VALUE: {rangeValues[range]}</p>
      <input
        id="tickmarks-input"
        type="range"
        min="0"
        max="4"
        step="1"
        value={range}
        onChange={handleDateSlider}
        list="tickmarks"
      />
      <datalist id="tickmarks">
        <option value="0" data-period="week" label="1 week" />
        <option value="1" data-period="month" label="1 month" />
        <option value="2" data-period="threeMonths" label="3 months" />
        <option value="3" data-period="sixMonths" label="6 months" />
        <option value="4" data-period="year" label="1 year" />
      </datalist>

      <button className="showrates-button" onClick={bringData}>
        Show rates
      </button>
    </div>
  );
}
export default FetchAgg;
