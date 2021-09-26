import React from 'react';
import "./AllEmployees.css";

const AllEmployees = (props) => {
    const {name,age,email,nationality,salary,img}=props.employee;
    return (
        <div className="col-md-4">
           <div className="employee-card">
               <div className="employee-image">
                   <img  src={img} alt=""/>
               </div>
               <div className="mx-auto text-center">
                  <h5>Name: {name}</h5> 
                  <p>Age: {age}</p>
                  <p>Nationality: {nationality}</p>
                  <p>Email: {email}</p>
                  <p>Salary Increment:$  {salary}</p>
                  {props.employee.isAdded ?(
                  <button className="btn btn-danger mt-3 text-white">Already Added</button>)
              
              :(
                  <button onClick={()=>props.handleEmployee(props.employee)} className="btn btn-info mt-3 text-white"> <i className= "fas fa-user me-2 text-white"></i>Add Employee</button>
              )}
               </div>
           </div>
        </div>
    );
};

export default AllEmployees;