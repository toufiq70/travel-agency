import React, { useContext, useEffect, useRef, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail, AiOutlineLogin } from "react-icons/ai";

import {
  BsFacebook,
  BsGoogle,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";

const Announcement = () => {
  // from context
  const { user, logOut, setUser } = useContext(AuthContext);
  
 

  return (
    <div className="z-20 flex border-b text-slate-600 border-gray-300 text-xs h-12 justify-between px-10 items-center w-full">
      <div className="md:flex items-center w-full hidden ">
        <div className="flex  items-center   mr-8">
          <span className="mr-3">
            <BiPhoneCall></BiPhoneCall>
          </span>
          <span>+8801750119633</span>
        </div>
        <div className="flex items-center ">
          <span className="mr-2 md:mr-3">
            <AiOutlineMail></AiOutlineMail>
          </span>
          <span className="pr-2">
            <Link to="contact">toufiqcse7@gmail.com</Link>
          </span>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex  gap-3 pr-8">
          <Link to="/contact">
            {" "}
            <BsFacebook></BsFacebook>{" "}
          </Link>
          <Link to="/contact">
            {" "}
            <BsLinkedin></BsLinkedin>{" "}
          </Link>
          <Link to="/contact">
            {" "}
            <BsYoutube></BsYoutube>{" "}
          </Link>
          <Link to="/contact">
            {" "}
            <BsGoogle></BsGoogle>{" "}
          </Link>
          <Link to="/contact">
            {" "}
            <BsTwitter></BsTwitter>{" "}
          </Link>
        </div>
        <span className="border-r h-8 border-gray-400"></span>
        <div className="px-2  ml-5 md:ml-0 text-purple-700 ">
        {
                    user?.photoURL ? 
                    <>
                      <Link to='/profile'> <img className='h-15 maz-w-full rounded-full' src={user.photoURL} alt="" /></Link>
                    
                    </>
                    :
                    <Link to='/login' ><AiOutlineLogin></AiOutlineLogin></Link>
                }
        </div>
      </div>
    </div>
  );
};

export default Announcement;
