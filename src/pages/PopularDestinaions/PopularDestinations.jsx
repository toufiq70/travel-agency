// @ts-nocheck
import React, { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";

const PopularDestinations = () => {
  const [destination, setDestination] = useState([]);
  const url = "http://localhost:5000/destination";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDestination(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {destination.map((des) => (
        <div className="relative group" key={des.id}>
          <Link to={`/destination/${des.id}`}>
            <img 
            src={des.image} 
            alt={des.title} 
            className='w-full h-full object-cover rounded-sm'
            />
            <p className="absolute inset-x-0 bottom-3 text-center text-white font-semibold group-hover:hidden">{des.title}</p>
            {/* <button className="absolute inset-y-0 bottom-36  bg-red-500 px-3 mt-2 text-white rounded right-3">{des.toursQuantity}</button> */}

            <div className="bg-black/50 text-white text-sm  absolute inset-0 pt-10 text-center px-2 hidden group-hover:block transition-all duration-500 ease-out flex items-center justify-center ">
                <p className="text-sm mb-2 font-semibold">{des.title}</p>
                <p className="leading-none text-xs">{des.description}</p>
                <Link to={`/destination/${des.id}`} className="text-red-500 mt-4 font-medium">{des.btn}</Link>
            </div>

          </Link>
        </div>
      ))}
    </div>
  );
};

export default PopularDestinations;
