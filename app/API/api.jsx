import { useState, useEffect } from "react";
import axios from "axios";

export function GetUserAsync(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchUser() {
      await axios.get("http://localhost:3001/user")
        .then(response => {
          if (response.status === 200) {
            setUser(response.data)
          }else{
            throw new Error("Error");
          }
        })
        .catch(error => {
          throw new Error("Error");
        })
        .finally( props.setIsLoading(false));
      
    }
    fetchUser();
    
  }, []);

  return props.renderProps(user);
}

export async function GetUserObjAsync(){
  return await axios.get("http://localhost:3001/user")
    .then(response => {
      if (response.status === 200) {
        return response
      }else{
        return response
      }
    })
    .catch(error => {
      throw new Error("Error");
    })

}

export function GetEmployeesAsync(props) {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    async function fetchEmployees() {
      props.setReloadEmployees(false);
      await axios.get("http://localhost:3001/employees")
        .then(response => {
          if (response.status === 200) {
            setEmployees(response.data)
          }else{
            throw new Error("Error");
          }
        })
        .catch(error => {
          throw new Error("Error");
        })
        .finally( props.setIsLoading(false));
      
    }
    fetchEmployees();
    
  }, [props.reloadEmployees]);

  return props.renderProps(employees);
}


export async function SubmitEmployeesAsync(id, rest, setIsLoading) {
  setIsLoading(true);
  return await axios.put(`http://localhost:3001/employees/${id}`, rest)
    .then(response => {
      if (response.status === 200) {
        return true;
      }else{
        return false;
      }
    })
    .finally( ()=> setIsLoading(false) )
    .catch(error => {
      return false;
    });
}