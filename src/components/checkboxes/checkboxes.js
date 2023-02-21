import * as React from "react";
import "./checkboxes.css"

//import Checkbox from 'path/to/Checkbox'; // import Checkbox component
const Checkbox = ({ label, value, onChange }) => {
  return (
    <label className="container">
      <input className="checkboxes" type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

function Checkboxes(props) {

  return (
    <div className="checkbox-style">
      <div className="checkitem">
        <Checkbox
          label="Closing Price"
          value={props.checkedClosing}
          onChange={props.handleChangeClosing}
        />
      </div>
      <div className="checkitem">
        <Checkbox
          label="Highest Price"
          value={props.checkedHighest}
          onChange={props.handleChangeHighest}
        />
      </div>
      <div className="checkitem">
        <Checkbox
          label="Lowest Price"
          value={props.checkedLowest}
          onChange={props.handleChangeLowest}
        />
      </div>
      <div className="checkitem">
        <Checkbox
          label="Opening Price"
          value={props.checkedOpen}
          onChange={props.handleChangeOpen}
        />
      </div>
      <div className="checkitem">
        <Checkbox
          label="Trading Volume"
          value={props.checkedVolume}
          onChange={props.handleChangeVolume}
        />
      </div>
    </div>
  );
};
export default Checkboxes;