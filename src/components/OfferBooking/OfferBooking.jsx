import { data } from "autoprefixer";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import {AiOutlineCalendar} from 'react-icons/ai'
import { BsChevronBarDown, BsChevronDown,BsEye,BsHeart,BsInfoCircleFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import {ImPriceTag} from 'react-icons/im'
import {FcProcess} from 'react-icons/fc'
import { Link, useNavigate } from "react-router-dom";

const OfferBooking = ({tourDetails}) => {

  const {new_price,old_price,facilities,ratings} = tourDetails

    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange =(date) => {
        setSelectedDate(date)
    }

    const navigate = useNavigate()
    const handleLoginSubmit = (e) => {
      e.preventDefault();
      // navigate("/login")
    }


  return (
    <div className="bg-white shadow-lg px-8 py-8 -mt-28 z-10 rounded-sm">
      <p className="text-sm font-medium mb-2">Special Offer</p>
      <div className="flex relative text-xs items-center justify-between">
        <div className="mt-3 text-gray-600 flex items-center">
          <span>
            <ImPriceTag className="text-xl text-red-500"/>
          </span>
          <span className="ml-4">From</span>
          <span className="ml-4 line-through"> ${old_price}</span>
        </div>
        <span className="text-2xl font-bold text-red-500"> ${new_price}</span>
        <span className="absolute inset-y-0 w-3 inline-flex items-center justify-center h-3 rounded-full -right-1 -top-2">
          <BsInfoCircleFill/>
        </span>
      </div>
      <form onSubmit={handleLoginSubmit} className="my-4">
            <div className="flex items-center justify-start group mb-3">
                <div className="">
                    <AiOutlineCalendar className="text-red-500 text-xl"/>
                </div>
                <div className="ml-4">
                <DatePicker 
                selected={selectedDate} 
                onChange={handleDateChange} dateFormat="dd-MMM-yyyy"  
                showMonthDropdown 
                showYearDropdown 
                popperClassName="react-datepicker-left"
                dropdownMode="select" 
                className="inline-flex p-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500">
                
                </DatePicker>
                
                </div>
                {/* <span className="transition group-open:rotate-180 text-xl font-bold absolute inset-x-0">
                    <BsChevronDown/>
                </span> */}
            </div>
            <p className="text-xs text-gray-600 ml-8">Available: {facilities.peopleCapacity} seat
             </p>
            <div className="my-3 flex items-center justify-start">
                <div>
                    <FaUser className="text-xl text-red-500"></FaUser>
                </div>
                <input type="number" name="number" id="number" placeholder="Number of People" className=" inline-flex p-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500 ml-4 w-full" />
            </div>

            <div className="mt-6 mb-3 flex items-center justify-start">
               
                <div>
                    <FcProcess className="text-xl text-red-500"></FcProcess>
                </div>
               
       
                <button type="submit" className="bg-red-500 px-4 py-2 rounded text-white text-center w-full focus:outline-none ml-4"> 
                    Proceed booking
                </button>
            
            </div>

            <div className="my-3 flex items-center justify-end text-xs text-gray-600 ">
              <Link to='' className="flex items-center mx-4 hover:text-red-500 duration-300">
                
                <BsHeart className="mr-2"></BsHeart>
                save to wish list
                </Link>
                <Link to='' className="flex items-center hover:text-red-500 duration-300">
                  <BsEye className="mr-2"></BsEye>
                  {ratings.review}</Link>
            </div>
      </form>
    </div>
  );
};

export default OfferBooking;
