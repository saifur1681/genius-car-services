import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceDetailId } = useParams();
    return (
        <div>
            <h2>This is a service detail: {serviceDetailId}</h2>
            <div className="text-center"> 
                <Link to="/checkout" >
                    <button class="btn btn-primary ">Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;