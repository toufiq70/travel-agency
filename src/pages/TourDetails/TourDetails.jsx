import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TourDetails = () => {
    const tourDetails = useLoaderData()
    console.log(tourDetails);
    return (
        <div>
            <p>details</p>
            <img src={tourDetails.image} alt="" />
            {/* {
            tourDetails.map(details => (
                <div key={details.id}>
                   
                    <p>{details.title}</p>
                </div>
            ))
            } */}
        </div>
    );
};

export default TourDetails;