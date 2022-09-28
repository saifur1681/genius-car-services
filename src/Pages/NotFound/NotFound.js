import React from 'react';
import  img  from '../../images/cute-cat-sleeping-bed (1).jpg'

const NotFound = () => {
    return (
        <div className="text-center text-primary " >
            <h1>Mechanic is Sleeping</h1>
            <img width="70%" height="380"src={img} alt="" />
        </div>
    );
};

export default NotFound;