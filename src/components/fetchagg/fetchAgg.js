import React from "react";
// UseEffect imported from react not used below
import { useState } from "react";
import "./fetchagg.css";
import moment from "moment";
//import ChartedData from "../../components/chartData/chartData";

const rangeValues = ["Week", "Month", "3 months", "6 months", "Year"];

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

    //console.log(index);

    switch (index) {
      case 0:
        setFrom(weekAgo);
        // console.log(from);
        break;
      case 1:
        setFrom(monthAgo);
        // console.log(from);
        break;
      case 2:
        setFrom(threeMonthsAgo);
        // console.log(from);
        break;
      case 3:
        setFrom(sixMonthsAgo);
        // console.log(from);
        break;
      case 4:
        setFrom(yearAgo);
        // console.log(from);
        break;
      default:
        setFrom(weekAgo);
        break;
    }
  };

  //console.log(weekAgo);

  function bringData() {

    if(props.currencyA && props.currencyB) {
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
    } else {

      // add to some text to prompt user to select some currencies
      // alert('Please select two currencies');
      props.setShowModal(true);
    }

  }

  return (
      <div>
        <div className="separation">
          <p className="text-center">Time span: {rangeValues[range]}</p>
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
            <option value="0" data-period="Week" label="1 week" />
            <option value="1" data-period="Month" label="1 month" />
            <option value="2" data-period="3 months" label="3 months" />
            <option value="3" data-period="6 months" label="6 months" />
            <option value="4" data-period="Year" label="1 year" />
          </datalist>
        </div>

        <div className="showrates-style">
          <button className="showrates-button" onClick={bringData}>
            Show rates
          </button>
        </div>
      </div>
  );
}
export default FetchAgg;
