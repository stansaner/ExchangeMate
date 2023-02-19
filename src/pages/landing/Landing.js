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
  const [currencyA, setCurrencyA] = useState("USD");
  const [currencyB, setCurrencyB] = useState("USD");
  const [showChart, setShowChart] = useState(false);

  // Using state variables for the checkboxes choice of data to display in the graphs

  const [checkedClosing, setCheckedClosing] = useState(false);
  const [checkedHighest, setCheckedHighest] = useState(false);
  const [checkedLowest, setCheckedLowest] = useState(false);
  const [checkedOpen, setCheckedOpen] = useState(false);
  const [checkedVolume, setCheckedVolume] = useState(false);

  const handleChangeClosing = () => {
    setCheckedClosing(!checkedClosing);
  };
  const handleChangeHighest = () => {
    setCheckedHighest(!checkedHighest);
  };
  const handleChangeLowest = () => {
    setCheckedLowest(!checkedLowest);
  };
  const handleChangeOpen = () => {
    setCheckedOpen(!checkedOpen);
  };
  const handleChangeVolume = () => {
    setCheckedVolume(!checkedVolume);
  };

  // Using setFetchedData function from useState to update fetchedData state
  const [fetchedData, setFetchedData] = useState("");

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
          <p>From: {currencyA}</p>
          <p>To: {currencyB}</p>
        </div>

        {/* Dropdown starts here  */}

        <Dropdown
          currencyA={currencyA}
          currencyB={currencyB}
          setCurrencyA={setCurrencyA}
          setCurrencyB={setCurrencyB}
        />

        {/* Checkboxes start here */}
        <Checkboxes
          checkedClosing={checkedClosing}
          handleChangeClosing={handleChangeClosing}
          checkedHighest={checkedHighest}
          handleChangeHighest={handleChangeHighest}
          checkedLowest={checkedLowest}
          handleChangeLowest={handleChangeLowest}
          checkedOpen={checkedOpen}
          handleChangeOpen={handleChangeOpen}
          checkedVolume={checkedVolume}
          handleChangeVolume={handleChangeVolume}
        />
        <FetchAgg
          currencyA={currencyA}
          currencyB={currencyB}
          onDataFetch={handleData}
          showChart={showChart}
          setShowChart={setShowChart}
        />
        {showChart && (
          <ChartedData
            showChart={showChart}
            setShowChart={setShowChart}
            fetchedData={fetchedData}
            checkedClosing={checkedClosing}
            checkedHighest={checkedHighest}
            checkedLowest={checkedLowest}
            checkedOpen={checkedOpen}
            checkedVolume={checkedVolume}
          />
        )}
      </div>
    </>
  );
}

export default Landing;
