import React from 'react';
import "./AllEmployees.css";
// show all employee detils 
const AllEmployees = (props) => {
    const {name,age,position,nationality,salary,img}=props.employee;
    return (
        <div className="col-md-4">
           <div className="employee-card">
               <div className="employee-image">
                   <img  src={img} alt=""/>
               </div>
               <div className="mx-auto text-start fs-6">
                  <h5><span className="fw-bold"> Name: </span> {name}</h5> 
                  <p ><span className="fw-bold"> Age: </span>{age}</p>
                  <p><span className="fw-bold">Nationality: </span>{nationality}</p>
                  <p><span className="fw-bold">Position:  </span>{position}</p>
                  <p><span className="fw-bold"> Salary Increment: </span>$ {salary}</p>
                  {props.employee.isAdded ?(
                  <button className="btn btn-danger mt-3 text-white">Already Added</button>)
              
              :(
                  <button onClick={()=>props.handleEmployee(props.employee)} className="btn btn-primary mt-3 text-white"> <i className= "fas fa-user me-2 text-white"></i>Add Employee</button>
              )}
               </div>
           </div>
        </div>
    );
};

export default AllEmployees;