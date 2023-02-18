import React from "react";
import "./chartData.css";
// Imported Recharts into fetch agg component
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const ChartedData = (props) => {

   // console.log(props.dates);

    const results = props.fetchedData.results;

    const dates = props.dates;

    for (let index in results) {
        let currentObj = results[index];
        currentObj.date = dates[index];
        //console.log(currentObj);
    }
    
    console.log(results);

    return (
        <>
            <h1>Testing charting</h1>
        </>
    );
};


export default ChartedData;