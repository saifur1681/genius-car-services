import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div className='g-5'>
            <div className="service-container container" >
                <img className="w-100" src={img} alt="" />
                <h2>Name: {name}</h2>
                <h3>{price}</h3>
                <p> <small>{description}</small> </p>
                <button className="btn btn-primary">Book: {name}</button>
            </div>
        </div>
    );
};

export default Service;