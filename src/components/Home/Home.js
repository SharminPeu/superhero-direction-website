import React, { useEffect, useState } from 'react';
import AllEmployees from '../AllEmployees/AllEmployees';
import EmployeeCart from '../EmployeeCart/EmployeeCart';
import "./Home.css";

const Home = () => {
    const [employees,setEmployees]=useState([])
    const [employeeCart,setEmployeeCart]=useState([])
    useEffect(()=>{
        fetch('./fakeData.JSON')
        .then(res=>res.json())
        .then(data=>setEmployees(data))
    },[])

    // Handle Employee Button 
    const handleEmployee=(employee)=>{
        employee.isAdded=true;
        const newEmployeeCart=[...employeeCart,employee]
        setEmployeeCart(newEmployeeCart);

    }
    return (
        <>
           <div className="row">
               <div className="col-md-9 left-side">
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