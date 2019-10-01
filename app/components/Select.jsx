import React from "react";

const Select = ( {selectId, labelValue, selectValue, values, onChange} ) => (
    <div className="form-group">
        <label htmlFor={selectId}>{labelValue}</label>
        <select
            className="form-control"
            id={selectId}
            name={selectId}
            value={selectValue}
            onChange={(e)=>onChange(e)}
        >
        {
            values.length &&
                values.map((value) => <option key={value}>{value}</option>)
        }

        </select>
    </div>
)
  

export default Select;