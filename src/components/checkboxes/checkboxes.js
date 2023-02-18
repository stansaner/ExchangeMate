import * as React from "react";

//import Checkbox from 'path/to/Checkbox'; // import Checkbox component
const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

function Checkboxes(props) {

  return (
    <div>
      <Checkbox
        label="Closing Price"
        value={props.checkedClosing}
        onChange={props.handleChangeClosing}
      />
      <Checkbox
        label="Highest Price"
        value={props.checkedHighest}
        onChange={props.handleChangeHighest}
      />
      <Checkbox 
        label="Lowest Price" 
        value={props.checkedLowest} 
        onChange={props.handleChangeLowest} 
      />
      <Checkbox 
        label="Opening Price" 
        value={props.checkedOpen} 
        onChange={props.handleChangeOpen} 
      />
      <Checkbox 
        label="Trading Volume" 
        value={props.checkedVolume} 
        onChange={props.handleChangeVolume} 
      />
    </div>
  );
};
export default Checkboxes;