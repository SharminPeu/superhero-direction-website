import React, { useEffect, useState } from 'react';
import AllEmployees from '../AllEmployees/AllEmployees';
import EmployeeCart from '../EmployeeCart/EmployeeCart';
import "./Home.css";

const Home = () => {
    // set load data 
    const [employees,setEmployees]=useState([])
    
    // load the data from fakedata
    useEffect(()=>{
        fetch('./fakeData.JSON')
        .then(res=>res.json())
        .then(data=>setEmployees(data))
    },[])
    
    const [employeeCart,setEmployeeCart]=useState([])

    // Handle Employee Button 
    const handleEmployee=(employee)=>{
        employee.isAdded=true;
        const newEmployeeCart=[...employeeCart,employee]
        setEmployeeCart(newEmployeeCart);

    }
    return (
        <>
           <div className="row mt-3">
               <div className="col-md-9 ">
                   <div className="row">
                       {
                           employees.map((employee) =>(
                               <AllEmployees
                               key={employee.key}
                               employee={employee}
                               handleEmployee={handleEmployee}
                               >

                               </AllEmployees>
                           ))
                       }

                   </div>
               </div>
               <div className="col-md-3">
                   <EmployeeCart
               
                   employeeCart={employeeCart}
                   ></EmployeeCart>
               </div>
               </div> 
        </>
    );
};

export default Home;