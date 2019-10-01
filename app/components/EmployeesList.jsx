import React from "react";
import LoadingHOC from './LoadingHOC';

const employeeObj = (employee, onSelectEmployee)=>{
    return (
        <li key={employee.id} className="employee-list-item">
        <a href="#" onClick={(e) => onSelectEmployee(e, employee)}>
            <div className="img">
            <img
                width={70}
                height={70}
                className="rounded-circle"
                src={employee.picture}
                alt={`${employee.firstName} ${employee.lastName} photo`}
            />
            </div>
            <div className="info">
            <p className="name">{`${employee.firstName} ${employee.lastName}`}</p>
            <p className="email">{employee.email}</p>
            </div>
        </a>
    </li>
    )

}

function EmployeesList({employees, onSelectEmployee}) {



    return (
        <div className="employees-list">
            <ul>
                {employees.length &&
                employees.map((employee) => (
                    employeeObj(employee, onSelectEmployee)
                    
                ))}
            </ul>
        </div>
    );
}

export default LoadingHOC(EmployeesList);