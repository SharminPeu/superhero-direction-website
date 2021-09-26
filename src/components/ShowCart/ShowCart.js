import React from 'react';
import "./ShowCart.css"
// show employee name and image in cart 
const ShowCart = (props) => {
    return (
        <div className="show">
            <div className="d-flex justify-content-center align-items-center employee-cart ">

                <div>
                    <img src={props.img} alt="" />
                </div>
                <div className="employee-cart-name mx-auto ">
                    {props.name}
                </div>
            </div>
        </div>
    );
};

export default ShowCart;