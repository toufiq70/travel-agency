// @ts-nocheck
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {BsClockHistory, BsStarFill, BsStarHalf} from 'react-icons/bs'
import {BiCurrentLocation} from 'react-icons/bi'
const Tours = () => {
  const allTours = useLoaderData();
  console.log(allTours);

  return (
    <div className="">
      <div
        style={{
          backgroundImage:
            "url('https://www.wallpapers13.com/wp-content/uploads/2018/05/Tropical-landscape-blue-river-in-the-jungle-fallen-wood-rain-forest-Ultra-HD-4K-Resolution-Wallpapers-3840x2400-1920x1440.jpg')",
        }}
        className="bg-center bg-no-repeat bg-cover h-full mb-10 "
      >
        <div className="bg-black/50">
          <p className="text-3xl font-bold text-white  flex justify-center items-center py-28 uppercase">
            Best Forest
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-3 items-center max-w-4xl md:mx-auto mx-2">
       
       
        {allTours.map((tours) => (
          <div className=" h-full relative bg-white shadow-lg" key={tours.id}>
           
           
            <Link to={`/tours/${tours.id}`}>
              <img
                className=" object-cover h-36 w-full  rounded-sm max-w-full"
                src={tours.image}
                alt=""
              />

              <p className="px-4 text-center text-xl font-medium text-gray-800 py-3">{tours.themeTitle}</p>
              <p className="text-sm text-gray-600 px-4 flex items-center">
                <span className="mr-1 text-red-500 font-medium"><BsClockHistory/></span>
                {tours.duration}
                </p>

              <div className="flex justify-between items-center text-xs pb-2 pt-1">

                <div className="flex  flex-col  px-4">
                    <div className="flex  text-yellow-500 mr-1 items-center">
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarHalf/>

                    <span className="text-[0.7rem] pl-1 text-gray-600"> {tours.ratings.review}</span>
                    </div>
                    <div className="flex items-center text-[0.6rem]">
                    <span className="text-blue-600"><BiCurrentLocation></BiCurrentLocation></span>
                    <p className="pl-1">{tours.locations}</p>
                    </div>
                </div>

                <div className="flex flex-col pr-4 ">
                <p className="text-center text-sm line-through text-gray-500 leading-none">$ {tours.old_price}</p>
                <p className="text-xl font-bold text-red-500 leading-normal">$ {tours.new_price}</p>
                </div>
                
              </div>
              
            </Link>
            <span className="bg-red-500 px-3 py-1 rounded text-sm text-white absolute inset-x-0 top-32 w-20 left-8">{tours.offer}</span>
          </div>
        ))}



      </div>
    </div>
  );
};

export default Tours;
