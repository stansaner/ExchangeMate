import React from "react";
import "./chartData.css";
// Imported moment.js
import moment from 'moment';
// Imported Recharts into fetch agg component
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const ChartedData = (props) => {

   // console.log(props.dates);

    const results = props.fetchedData.results;

    // const results = props.data.results;

   // const dates = props.dates;

    for (let index in results) {
        let currentObj = results[index];

        let currentUnixMsec = currentObj.t;

        //console.log(currentUnixMsec)

        let date = moment(currentUnixMsec).format('DD/MM/YY');

        //console.log(date);

        currentObj.t = date;

        //console.log(currentObj)
        //currentObj.date = dates[index];
        //console.log(currentObj);
    }
    
    console.log(results);

    //Other lines - they distort the line graph when added in so I have put them here for now
    // <Line type="monotone" dataKey="v" name="Trading volume" stroke="#none" />
    // <Line type="monotone" dataKey="n" name="Number of transactions" stroke="#none" />

    return (
        <>
        <h3>Results</h3>
            <LineChart width={600} height={300} data={results}>
                <XAxis dataKey="t" domain={['auto', 'auto']} />
                <YAxis domain={['auto', 'auto']}/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                {props.checkedHighest && <Line type="monotone" dataKey="h" name="Highest price" stroke="#82ca9d" />}
                {props.checkedLowest && <Line type="monotone" dataKey="l" name="Lowest price" stroke="#FF7F50" />}
                {props.checkedOpen && <Line type="monotone" dataKey="o" name="Open price" stroke="#A9A9A9" />}
                {props.checkedClosing && <Line type="monotone" dataKey="c" name="Closing price" stroke="#008080" />}
                {props.checkedVolume && <Line type="monotone" dataKey="vw" name="Volume weighted average price" stroke="#00BFFF" />}
                <Tooltip />
                <Legend />
            </LineChart>
        </>
    );
};


export default ChartedData;