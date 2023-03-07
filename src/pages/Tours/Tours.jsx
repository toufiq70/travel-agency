import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Tours = () => {
    const allTours = useLoaderData()
    // console.log(allTours);
   
    return (
        <div className='flex w-1/2'>
            {
                allTours.map(tours => (
                    <div key={tours.id}>
                        <img src={tours.image} alt="" />
                        <Link to={`/tours/${tours.id}`}>tour Details</Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Tours;