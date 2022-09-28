import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceDetailId } = useParams();
    return (
        <div>
            <h2>This is a service detail: {serviceDetailId}</h2>
        </div>
    );
};

export default ServiceDetail;