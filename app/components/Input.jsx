import React from "react";

const Input = ( {inputId, inputValue, labelValue, onChange} ) => (
    <div className="form-group">
        <label htmlFor={inputId}>{labelValue}</label>
        <input
            type="text"
            className="form-control"
            id={inputId}
            name={inputId}
            value={inputValue}
            onChange={(e)=>onChange(e)}
        />
    </div>
)
  

export default Input;