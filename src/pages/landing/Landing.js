import React from "react";
import { useState } from "react";
import "./landing.css";

// import FetchCurrencies from "../../components/fetchCurrencies/fetchCurrencies";
import FetchAgg from "../../components/fetchagg/fetchAgg";
import Hero from "../../components/hero/hero";
import Dropdown from "../../components/dropdown/Dropdown";
import Checkboxes from "../../components/checkboxes/checkboxes";
import ChartedData from "../../components/chartData/chartData";

function Landing() {

  //Set up useState as an object
  const [currencyObj, setCurrencyObj] = useState({
    currencyA: '',
    currencyB: ''
  });

  //Set up useState as an object
  // const [currencyA, setCurrencyA] = useState("");
  // const [currencyB, setCurrencyB] = useState("");
  const [showChart, setShowChart] = useState(false);

  // Using state variables for the checkboxes choice of data to display in the graphs
  // const [checkedClosing, setCheckedClosing] = useState(false);
  // const [checkedHighest, setCheckedHighest] = useState(false);
  // const [checkedLowest, setCheckedLowest] = useState(false);
  // const [checkedOpen, setCheckedOpen] = useState(false);
  // const [checkedVolume, setCheckedVolume] = useState(false);

    //Set up useState as an object
    const [checkboxVars, setCheckboxVars] = useState({
      checkedClosing: false,
      checkedHighest: false,
      checkedLowest: false,
      checkedOpen: false,
      checkedVolume: false
    });

  const handleChangeClosing = () => {
    let toggleC = !checkboxVars.checkedClosing;
    setCheckboxVars({...checkboxVars, checkedClosing: toggleC});
  };
  const handleChangeHighest = () => {
    let toggleH = !checkboxVars.checkedHighest;
    setCheckboxVars({...checkboxVars, checkedHighest: toggleH});
  };
  const handleChangeLowest = () => {
    let toggleL = !checkboxVars.checkedLowest;
    setCheckboxVars({...checkboxVars, checkedLowest: toggleL});
  };
  const handleChangeOpen = () => {
    let toggleO = !checkboxVars.checkedOpen;
    setCheckboxVars({...checkboxVars, checkedOpen: toggleO});
  };
  const handleChangeVolume = () => {
    let toggleV = !checkboxVars.checkedVolume;
    setCheckboxVars({...checkboxVars, checkedVolume: toggleV});
  };

  // Using setFetchedData function from useState to update fetchedData state
  const [fetchedData, setFetchedData] = useState(" ");

  // handleData function calls setFetchedData and passes it the data object as a property
  function handleData(data) {
    setFetchedData(data);
  }

  return (
    <>
      <Hero />
      <div className="landing-container" id="currency-checker">
        <h1 className="test">Select your currencies below</h1>

        {/* First and second currency text  */}

        <div className="firstsecond-currency">
           {/* REFACTOR */}
          {/* <p>From: {currencyA}</p>
          <p>To: {currencyB}</p> */}
          <p>From: {currencyObj.currencyA}</p>
          <p>To: {currencyObj.currencyB}</p>
        </div>

        {/* Dropdown starts here  */}

        {/* REFACTOR */}
        <Dropdown
          // currencyA={currencyA}
          // currencyB={currencyB}
          // setCurrencyA={setCurrencyA}
          // setCurrencyB={setCurrencyB}
          currencyObj= {currencyObj}
          setCurrencyObj={setCurrencyObj}
          // setCurrencyB={setCurrencyObj({...currencyObj, currencyB: {curr} })}
          // setCurrencyB={setCurrencyObj}
        />

        {/* Checkboxes start here */}
        <Checkboxes
          // checkedClosing={checkedClosing}
          handleChangeClosing={handleChangeClosing}
          // checkedHighest={checkedHighest}
          handleChangeHighest={handleChangeHighest}
          // checkedLowest={checkedLowest}
          handleChangeLowest={handleChangeLowest}
          // checkedOpen={checkedOpen}
          handleChangeOpen={handleChangeOpen}
          // checkedVolume={checkedVolume}
          handleChangeVolume={handleChangeVolume}
          checkboxVars={checkboxVars}
        />

        {/* REFACTOR */}
        
        <FetchAgg
          currencyA={currencyObj.currencyA}
          currencyB={currencyObj.currencyB}
          onDataFetch={handleData}
          showChart={showChart}
          setShowChart={setShowChart}
        />
        {showChart && (
          <ChartedData
            showChart={showChart}
            setShowChart={setShowChart}
            fetchedData={fetchedData}
            // checkedClosing={checkedClosing}
            // checkedHighest={checkedHighest}
            // checkedLowest={checkedLowest}
            // checkedOpen={checkedOpen}
            // checkedVolume={checkedVolume}
            checkboxVars={checkboxVars}
          />
        )}
      </div>
    </>
  );
}

export default Landing;
