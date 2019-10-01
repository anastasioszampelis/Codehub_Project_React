import React from "react";
import Input from "./Input";
import Select from "./Select";

function EmployeeDetails( { selectedEmployee, onInputChange, onSelectChange, onFormSubmit } ) {

    return (
        <div className="employee-details">
            {selectedEmployee ? (
            <>
                <h3>
                    {selectedEmployee.id}:{" "}
                    {`${selectedEmployee.firstName} ${selectedEmployee.lastName}`} (
                    {selectedEmployee.department})
                </h3>
                <form onSubmit={onFormSubmit}> 
                <Input 
                    inputId = "firstName"
                    labelValue="First name:"
                    inputValue={selectedEmployee.firstName}
                    onChange={onInputChange}
                />
                <Input 
                    inputId = "lastName"
                    labelValue="Last name:"
                    inputValue={selectedEmployee.lastName}
                    onChange={onInputChange}
                />

                <Select 
                selectId="gender"
                labelValue="Gender:"
                onChange={onSelectChange}
                selectValue={selectedEmployee.gender}
                values={["male", "female"]}
                />

                <Input 
                    inputId = "email"
                    labelValue="Email:"
                    inputValue={selectedEmployee.email}
                    onChange={onInputChange}
                />

                <Input 
                    inputId = "phone"
                    labelValue="Phone:"
                    inputValue={selectedEmployee.phone}
                    onChange={onInputChange}
                />

                <Input 
                    inputId = "mobile"
                    labelValue="Mobile:"
                    inputValue={selectedEmployee.mobile}
                    onChange={onInputChange}
                />

                <Input 
                    inputId = "age"
                    labelValue="Age:"
                    inputValue={selectedEmployee.age}
                    onChange={onInputChange}
                />

                <button type="submit" className="btn btn-primary float-sm-right">
                    Submit
                </button>
                </form>
            </>
            ) : (
            <h3>Please select a user to view edit his data...</h3>
            )}
        </div>
    );
}

export default EmployeeDetails;