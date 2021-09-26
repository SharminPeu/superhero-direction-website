import React from 'react';
import ShowCart from '../ShowCart/ShowCart';
import "./EmployeeCart.css"
//  Employee Cart Section 
const EmployeeCart = (props) => {
    const { employeeCart } = props;
    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.salary

    const total = employeeCart.reduce(totalReducer, 0)
    return (
        <>
            <h3>
                Employee Added:{employeeCart.length}
            </h3>
            <h2>Total Salary Cost:$ {total}</h2>
            <div className="cart">
                {
                    employeeCart.map(employee => <ShowCart
                        key={employee.name}
                        name={employee.name}
                        img={employee.img}
                    >

                    </ShowCart>
                    )}





            </div>

        </>
    )
}

export default EmployeeCart;