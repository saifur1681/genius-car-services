import React from 'react';
import './Experts.css'

import experts1 from '../../../images/experts/expert-1.jpg'
import experts2 from '../../../images/experts/expert-2.jpg'
import experts3 from '../../../images/experts/expert-3.jpg'
import experts4 from '../../../images/experts/expert-4.jpg'
import experts5 from '../../../images/experts/expert-5.jpg'
import experts6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'John', img: experts1 },
    { id: 2, name: 'SMITH', img: experts2 },
    { id: 3, name: 'cina', img: experts3 },
    { id: 4, name: 'kader', img: experts4 },
    { id: 5, name: 'rock', img: experts5 },
    { id: 6, name: 'messi', img: experts6 }
]

const Experts = () => {
    return (
        <div className="container " >
            <h1 className="text-center  mt-5" style={{color: 'orange'}}>Our Experts</h1>
            <div className="row g-5" >
            {
                experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                ></Expert>)
            }
            </div>
        </div>
    );
};

export default Experts;