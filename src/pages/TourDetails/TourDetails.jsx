// @ts-nocheck
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  BsAlarmFill,
  BsChevronCompactDown,
  BsStarFill,
  BsStarHalf,
  BsWifi,
} from "react-icons/bs";
import { BiCurrentLocation, BiUser } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import OfferBooking from "../../components/OfferBooking/OfferBooking";
import WhyUs from "../../components/WhyUs/WhyUs";
import GetQuestions from "../../components/GetQuestion/GetQuestions";
const TourDetails = () => {
  const tourDetails = useLoaderData();
  console.log(tourDetails);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="relative z-[-1]">
        <img
          className="w-full max-w-full h-[17rem] md:h-[26rem]"
          src={tourDetails.image}
          alt=""
        />
        <span className="bg-black/30 absolute inset-0"></span>
      </div>
      {/* content section  */}
      <div className="">
        <div className="py-4 border-b border-gray-300 sticky top-0">
          <div className="flex md:w-8/12 w-full justify-center items-center ">
            {tourDetails.headerTitle.map((header) => (
              <a
                key={header.id}
                href={header.url}
                className="text-sm md:mr-5 mr-2 text-slate-600 font-medium"
              >
                {header.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex md:mx-28 mx-2 ">
          <div className="md:w-8/12 mt-8">
            <p className="text-2xl mb-3 font-bold ">{tourDetails.themeTitle}</p>
            <div className="flex text-sm text-yellow-500 ">
              <BsStarFill></BsStarFill>
              <BsStarFill></BsStarFill>
              <BsStarFill></BsStarFill>
              <BsStarHalf></BsStarHalf>
              <span className="text-xs text-gray-600 ml-1">
                {tourDetails.ratings.review}
              </span>
            </div>
            {/* facilities */}
            <div className="grid grid-cols-1 md:grid-cols-3 pb-6">
              <div className="flex items-center">
                <BsAlarmFill className=" text-red-400 text-2xl pt-2"></BsAlarmFill>
                <p className="text-sm text-gray-600 ml-2 pt-4 md:pt-2">
                  {tourDetails.duration}
                </p>
              </div>
              <div className="flex items-center">
                <FaUsers className=" text-red-400 text-2xl pt-2"></FaUsers>
                <p className="text-sm text-gray-600 ml-2  pt-4 md:pt-2">
                  Max People: {tourDetails.facilities.peopleCapacity}
                </p>
              </div>
              <div className="flex items-center">
                <BsWifi className=" text-red-400 text-2xl pt-2"></BsWifi>
                <p className="text-sm text-gray-600 ml-2  pt-4 md:pt-2">
                  {tourDetails.facilities.internet}
                </p>
              </div>
              <div className="flex items-center">
                <BiUser className=" text-red-400 text-2xl pt-2"></BiUser>
                <p className="text-sm text-gray-600 ml-2  pt-4 md:pt-2">
                  {tourDetails.facilities.age}
                </p>
              </div>
              <div className="flex items-center ">
                <BiCurrentLocation className=" text-red-400 text-2xl pt-2"></BiCurrentLocation>
                <p className="text-sm text-gray-600 ml-2  pt-4 md:pt-2">
                  Pickup: {tourDetails.facilities.pickup}
                </p>
              </div>
            </div>
            {/* details description */}
            <div id="" className="border-b border-gray-300">
              <div className=" border-t border-gray-300 border-b">
                <div className="py-6">
                  <p className="text-justify text-sm text-gray-600">
                    {tourDetails.details_1}
                  </p>
                  <p className="text-justify text-sm text-gray-600 pt-3">
                    {tourDetails.details_2}
                  </p>
                </div>
              </div>

              <div id="headers" className="">
                {tourDetails.departureAndRoomDetails.map((details) => (
                  <div key={details.departure}>
                    <div className="grid grid-cols-2 items-center border-t border-gray-300 py-3">
                      <p className="text-sm font-medium">{details.departure}</p>
                      <p className="   text-xs text-gray-600">
                        {details.departureContent}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {tourDetails.price.map((priceAll) => (
                  <div key={priceAll.title}>
                    <div className="grid grid-cols-2  border-t border-gray-300 py-3">
                      <p className="text-sm font-medium">{priceAll.title}</p>
                      <div className="flex flex-col text-xs text-gray-600 leading-loose">
                        <p className="flex items-center ">
                          {" "}
                          <AiOutlineCaretRight className="text-red-500 text-sm mr-2" />{" "}
                          {priceAll.list_1}
                        </p>
                        <p className="flex items-center ">
                          {" "}
                          <AiOutlineCaretRight className="text-red-500 text-sm mr-2" />{" "}
                          {priceAll.list_2}
                        </p>
                        <p className="flex items-center ">
                          {" "}
                          <AiOutlineCaretRight className="text-red-500 text-sm mr-2" />{" "}
                          {priceAll.list_3}
                        </p>
                        <p className="flex items-center ">
                          {" "}
                          <AiOutlineCaretRight className="text-red-500 text-sm mr-2" />{" "}
                          {priceAll.list_4}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* =========Photos slider======= */}
            <div className="py-6 border-gray-300 border-b" id="photo">
              <p className="text-2xl font-bold mb-2">Photos</p>
              {/* slider */}
              <div className="py-2">
                <img
                  className="rounded-sm "
                  src={tourDetails.photos[1]}
                  alt=""
                />
              </div>
            </div>

            {/* =============Itinerary======== */}
            <div className="py-6 border-gray-300 border-b" id="itinerary">
              <p className="text-2xl font-bold mb-2">Itinerary</p>
              {/* =========road map======== */}
              <div className="flex flex-col gap-3">
                <details class="group">
                  <summary class="bg-gray-300 flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium cursor-pointer ">
                    <span className="">{tourDetails.Itinerary.firstDay} </span>
                    <span className="text-red-500">
                      {tourDetails.Itinerary.day_1_title}
                    </span>
                    <span class="transition group-open:rotate-180 text-xl font-bold">
                      <BsChevronCompactDown></BsChevronCompactDown>
                    </span>
                  </summary>
                  <p class="text-justify text-xs text-gray-600  py-2 group-open:animate-fadeIn">
                    {tourDetails.Itinerary.day_1_details}
                  </p>
                </details>

                <details class="group">
                  <summary class="bg-gray-300 flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium cursor-pointer ">
                    <span className="">{tourDetails.Itinerary.secondDay} </span>
                    <span className="text-red-500">
                      {tourDetails.Itinerary.day_2_title}
                    </span>
                    <span class="transition group-open:rotate-180 text-xl font-bold">
                      <BsChevronCompactDown></BsChevronCompactDown>
                    </span>
                  </summary>
                  <p class="text-justify text-xs text-gray-600  py-2 group-open:animate-fadeIn">
                    {tourDetails.Itinerary.day_2_details}
                  </p>
                </details>
                <details class="group">
                  <summary class="bg-gray-300 flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium cursor-pointer ">
                    <span className="">{tourDetails.Itinerary.thirdDay} </span>
                    <span className="text-red-500">
                      {tourDetails.Itinerary.day_3_title}
                    </span>
                    <span class="transition group-open:rotate-180 text-xl font-bold">
                      <BsChevronCompactDown></BsChevronCompactDown>
                    </span>
                  </summary>
                  <p class="text-justify text-xs text-gray-600  py-2 group-open:animate-fadeIn">
                    {tourDetails.Itinerary.day_3_details}
                  </p>
                </details>

                <details class="group">
                  <summary class="bg-gray-300 flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium cursor-pointer ">
                    <span className="">{tourDetails.Itinerary.fourthDay} </span>
                    <span className="text-red-500">
                      {tourDetails.Itinerary.day_4_title}
                    </span>
                    <span class="transition group-open:rotate-180 text-xl font-bold">
                      <BsChevronCompactDown></BsChevronCompactDown>
                    </span>
                  </summary>
                  <p class="text-justify text-xs text-gray-600  py-2 group-open:animate-fadeIn">
                    {tourDetails.Itinerary.day_4_details}
                  </p>
                </details>

                <details class="group">
                  <summary class="bg-gray-300 flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium cursor-pointer ">
                    <span className="">{tourDetails.Itinerary.fiveDay} </span>
                    <span className="text-red-500">
                      {tourDetails.Itinerary.day_5_title}
                    </span>
                    <span class="transition group-open:rotate-180 text-xl font-bold">
                      <BsChevronCompactDown></BsChevronCompactDown>
                    </span>
                  </summary>
                  <p class="text-justify text-xs text-gray-600  py-2 group-open:animate-fadeIn">
                    {tourDetails.Itinerary.day_5_details}
                  </p>
                </details>
              </div>
            </div>

            {/* =====================maps====================== */}
            <div className="py-6 border-gray-300 border-b" id="map">
                  <h1 className="text-2xl font-bold mb-2" >Map</h1>
            </div>

            {/* =============faq==================== */}
            <div className="py-6 border-gray-300 border-b" id="map">
                  <h1 className="text-2xl font-bold mb-2" >FAQ</h1>
            </div>

            {/* review section */}
            
            <div className="py-6 border-gray-300 border-b" id="map">
              <div className="flex justify-between">
                  <div className="flex items-center text-sm">
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarHalf></BsStarHalf>
                    <p className="ml-2">{tourDetails.ratings.review}</p>
                  </div>
                  <div className="flex items-center ">
                    <p>Sort By: </p>
                    <p>Date: </p>
                    <p>Ratings </p>
                  </div>
              </div>
              <div className="">
                {
                  tourDetails.reviews.map(review => (
                    <div key={review.review_person}>
                      <p>{review.review_person}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="md:w-1/3 hidden md:block ml-8 sticky top-0">
             <OfferBooking tourDetails={tourDetails}/> 
            <WhyUs/>
            <GetQuestions tourDetails={tourDetails}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
