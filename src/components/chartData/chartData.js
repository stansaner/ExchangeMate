import React from "react";
import { useState } from "react";
// Imported moment.js
import moment from 'moment';
// Imported Recharts into fetch agg component
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import "./chartData.css";

const ChartedData = (props) => {

   // console.log(props.dates);

    const results = props.fetchedData.results;

    // const results = props.data.results;

   // const dates = props.dates;

    for (let index in results) {
        let currentObj = results[index];

        let currentUnixMsec = currentObj.t;

        // console.log(currentUnixMsec)

        let date = moment(currentUnixMsec).format('DD/MM/YY');

        //console.log(date);

        currentObj.date = date;

        //console.log(currentObj)
        //currentObj.date = dates[index];
        //console.log(currentObj);
    }
    
    //console.log(results);

    // const for toggle grid lines

    const [grid, setGrid] = useState(false);

    const [gridStyling, setGridStyling] = useState('#eee');

    const [gridBtnText, setGridBtnText] = useState("grid off");

    //Button toggle grid lines
    function toggleGrid() {

        setGrid(!grid);

        if (grid) {
            setGridBtnText("grid off");
            setGridStyling('#ccc');
        } else {
            setGridBtnText("grid on");
            setGridStyling('none');
        };
    }


    return (
        <>
           {/* {(props.checkboxVars.checkedHighest || props.checkboxVars.checkedLowest || props.checkboxVars.checkedOpen || props.checkboxVars.checkedClosing || props.checkboxVars.checkedVolume) &&  <button className="grid-toggle-button grid-style" onClick={toggleGrid}>{gridBtnText}</button>} */}

           <h3>Results:</h3>
           
            {(props.checkboxVars.checkedHighest || props.checkboxVars.checkedLowest || props.checkboxVars.checkedOpen || props.checkboxVars.checkedClosing) && <div className="chartParent">
                <ResponsiveContainer width='100%' height='100%'>
                <LineChart width={600} height={300} data={results}>
                    <XAxis dataKey="date" domain={['auto', 'auto']} />
                    <YAxis domain={['auto', 'auto']}/>
                    {/* add gridToggle to stroke */}
                    <CartesianGrid stroke={gridStyling} strokeDasharray="5 5" />
                    {props.checkboxVars.checkedHighest && <Line type="monotone" dataKey="h" name="Highest price" stroke="#82ca9d" />}
                    {props.checkboxVars.checkedLowest && <Line type="monotone" dataKey="l" name="Lowest price" stroke="#FF7F50" />}
                    {props.checkboxVars.checkedOpen && <Line type="monotone" dataKey="o" name="Open price" stroke="#A9A9A9" />}
                    {props.checkboxVars.checkedClosing && <Line type="monotone" dataKey="c" name="Closing price" stroke="#008080" />}
                    <Tooltip />
                    <Legend />
                </LineChart>
                </ResponsiveContainer>
                </div>
            }       

            {props.checkboxVars.checkedVolume && <div className="chartParent">
                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart width={600} height={300} data={results}>
                    <XAxis dataKey="date" domain={['auto', 'auto']} />
                    <YAxis domain={['auto', 'auto']}/>
                    {/* add gridToggle to stroke */}
                    <CartesianGrid stroke={gridStyling} strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="v" name="Trading volume" stroke="#00BFFF" />
                    <Tooltip />
                    <Legend />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            }

            {(props.checkboxVars.checkedHighest || props.checkboxVars.checkedLowest || props.checkboxVars.checkedOpen || props.checkboxVars.checkedClosing || props.checkboxVars.checkedVolume) && <div className="gridbutton-container">
                <button className="grid-style" onClick={toggleGrid}>{gridBtnText}</button>
            </div>}

        </>
    );
};


export default ChartedData;