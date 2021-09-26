import React from 'react';
import "./EmployeeCart.css"

const EmployeeCart = (props) => {
    const{employeeCart}=props;
    const totalReducer=(prevValue,currentValue)=>prevValue+currentValue.salary

   const total=employeeCart.reduce(  totalReducer   ,  0)
    return (
        <>
                <h3>
                 Added Employee:{employeeCart.length}
               </h3>
                <h2>Total Salary:$ {total}</h2>
                <div className="">
                   {
                       employeeCart.map( employee=>(
                        //    key={employee.name}
                       <div className="d-flex justify-content-center align-items-center employee-cart "> <div>
                        
                           <img src={employee.img} alt="" /></div><div className="employee-cart-name mx-auto ">
                           
                           {employee.name}</div></div>))
                   }
            
               </div>

        </>
    );
};

export default EmployeeCart;