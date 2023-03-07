import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../Carousel/Carousel";
import PopularDestinations from "../../PopularDestinaions/PopularDestinations";
import TourForeCast from "../../TourForeCast/TourForeCast";
import TourSDoptions from "../../TourSearchDestinationOption/TourSDoptions";

const HomePage = () => {
  return (
    <div>
        <div className="relative">
            <Carousel />
            <div className="absolute inset-0 top-40 z-10">
              <TourSDoptions />
            </div>
            <div className="md:absolute md:inset-x-0 -bottom-10  z-10">
              <TourForeCast />
            </div>
      
        </div>
        <div className="mt-14 md:mx-36">
            <div className="flex flex-col items-center my-4">
            <p className="text-2xl font-bold text-gray-700">Popular Destinations</p>
            <Link to='' className="text-red-500 text-xs">see all destinations</Link>
            </div>
            <PopularDestinations/>
        </div>
    </div>
  );
};

export default HomePage;
