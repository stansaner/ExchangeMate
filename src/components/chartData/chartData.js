import React from "react";
import "./chartData.css";
// Imported Recharts into fetch agg component
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const ChartedData = (props) => {
    
    console.log(props.fetchedData);

    return (
        <>
            <h1>Testing charting</h1>
        </>
    );
};


export default ChartedData;