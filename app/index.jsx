import React from "react";
import ReactDOM from "react-dom";
import Employees from './containers/Employees';
import UserContext from './Context/UserContext';
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

ReactDOM.render(
    <UserContext.Provider value={{user: null}}>
        <Employees />
    </UserContext.Provider>, document.getElementById("⚛"));
