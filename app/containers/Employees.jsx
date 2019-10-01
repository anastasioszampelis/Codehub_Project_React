import React, { useState, useEffect } from "react";
import Layout from '../components/Layout';
import { Row, Col } from "reactstrap";
import { GetEmployeesAsync, SubmitEmployeesAsync, GetUserObjAsync } from '../API/api';
import EmployeesList from '../components/EmployeesList';
import EmployeeDetails from '../components/EmployeeDetails';
import { ToastContainer, toast } from 'react-toastify';
import UserContext from '../Context/UserContext';
import 'react-toastify/dist/ReactToastify.css';

function Employees() {

  const [user, setUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [reloadEmployees, setReloadEmployees] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      await GetUserObjAsync()
        .then(response => {
          if (response.status === 200) {
            setUser(response.data);
            
          }else{
            throw new Error("Error");
          }
        })
        .catch(error => {
          throw new Error("Error");
        })
        .finally(()=>{
          setIsLoadingUser(false);
          setIsLoading(false);
        })
        
      
    }
    fetchUser();
    
  }, []);

  function onSelectEmployee(e, employee){
    e.preventDefault();
    setSelectedEmployee(employee);
  }

  function onInputChange(e){
    const { value, name } = e.target;
    setSelectedEmployee({ ...selectedEmployee, [name]: value });
    
  };

  function onSelectChange(e){
    const { value } = e.target;
    setSelectedEmployee({ ...selectedEmployee, 'gender': value });
  };

  async function onFormSubmit(e){
    e.preventDefault();
    const { id, ...rest } = selectedEmployee;
    await SubmitEmployeesAsync(id, rest, setIsLoading)
      .then(response=>{
        if(response){
          toast.dismiss();
          toast.info("Save was succesfull", {
            position: toast.POSITION.BOTTOM_CENTER
          });
          setReloadEmployees(true);
        }else{
          toast.dismiss();
          toast.error("Save Error", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      })
  };

    return (
      <UserContext.Provider value={{ user:user, isLoadingUser: isLoadingUser }} isLoading={isLoading}>
        <Layout>
          <ToastContainer />
          <Row>
            <Col xs={12}>
              <div className="employees-container">
                <GetEmployeesAsync 
                  reloadEmployees={reloadEmployees}
                  setReloadEmployees={setReloadEmployees}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  renderProps={(employees) => (              
                    <EmployeesList employees={employees} isLoading={isLoading} onSelectEmployee={onSelectEmployee}/>
                  )}
                />
                <EmployeeDetails selectedEmployee={selectedEmployee} onInputChange={onInputChange} onSelectChange={onSelectChange} onFormSubmit={onFormSubmit} />
              </div>
            </Col>
          </Row>
        </Layout>
      </UserContext.Provider>
    );
}

export default Employees;
