import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    const navigate = useNavigate();

    const handleServiceDetail = () => {
        navigate(`/serviceDetail/${id}`)
    }

    return (
        <div className='g-5'>
            <div className="service-container container" >
                <img className="w-100" src={img} alt="" />
                <h2> {name}</h2>
                <h5>Price: {price}</h5>
                <p> <small>{description}</small> </p>
                <button onClick={() => handleServiceDetail(id)} className="btn btn-primary">Book: {name}</button>
            </div>
        </div>
    );
};

export default Service;