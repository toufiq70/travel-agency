import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail, AiOutlineLogin } from "react-icons/ai";
import {
  BsFacebook,
  BsGoogle,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Announcement = () => {
  return (
    <div className="flex border-b text-slate-600 border-gray-300 text-xs h-12 justify-between px-10 items-center w-full">
      <div className="md:flex items-center w-full hidden md:block">
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
          <Link to='/contact'>  <BsFacebook></BsFacebook>  </Link>
          <Link to='/contact'>  <BsLinkedin></BsLinkedin>  </Link>
          <Link to='/contact'>  <BsYoutube></BsYoutube>  </Link>
          <Link to='/contact'>  <BsGoogle></BsGoogle>  </Link>
          <Link to='/contact'>  <BsTwitter></BsTwitter>  </Link>
        </div>
        <span className="border-r h-8 border-gray-400"></span>
        <div className="px-4 text-xl ml-7 md:ml-0 text-purple-700 ">
          <Link to='/login' className=""> <AiOutlineLogin></AiOutlineLogin></Link>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
