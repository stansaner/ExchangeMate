import React from "react";
import "./chartData.css";
// Imported moment.js
import moment from 'moment';
// Imported Recharts into fetch agg component
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const ChartedData = (props) => {

   // console.log(props.dates);

    const results = props.fetchedData.results;

   // const dates = props.dates;

    for (let index in results) {
        let currentObj = results[index];

        let currentUnixMsec = currentObj.t;

        //console.log(currentUnixMsec)

        let date = moment(currentUnixMsec).format('DD/MM/YY');

        //console.log(date);

        currentObj.t = date;

        console.log(currentObj)
        //currentObj.date = dates[index];
        //console.log(currentObj);
    }
    
    console.log(results);

    return (
        <>
            <LineChart width={600} height={300} data={results}>
                <XAxis dataKey="t" domain={['auto', 'auto']} />
                <YAxis domain={['auto', 'auto']}/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="c" name=""stroke="#8884d8" />
                <Line type="monotone" dataKey="h" stroke="#82ca9d" />
                <Line type="monotone" dataKey="l" stroke="#8884d8" />
                <Line type="monotone" dataKey="n" stroke="#82ca9d" />
                <Line type="monotone" dataKey="o" stroke="#8884d8" />
                <Line type="monotone" dataKey="t" stroke="#82ca9d" />
                <Line type="monotone" dataKey="v" stroke="#82ca9d" />
                <Line type="monotone" dataKey="vw" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
            </LineChart>
        </>
    );
};


export default ChartedData;