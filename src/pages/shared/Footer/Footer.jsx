import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

    const handleEmailSubscribe = (e) => {
        e.preventdefault();
    }

  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto flex flex-wrap text-sm">
        <div className="w-full md:w-1/3 px-4">
          <h2 className=" mb-4">About Us</h2>
          <p className="mb-4 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ipsum eget risus vehicula ullamcorper.
          </p>
          <p>
            <Link to="" className="text-xs text-blue-500 hover:text-blue-400">
              Learn More
            </Link>
          </p>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <h2 className=" mb-4">Contact Us</h2>
          <p className="mb-2 text-xs">
            123 Main Street<br />
            Suite 200<br />
            New York, NY 10001<br />
            <Link to="tel:555-555-5555" className="text-xs text-blue-500 hover:text-blue-400">
              (555) 555-5555
            </Link>
          </p>
          <p>
            <Link to="" className="text-blue-500 text-xs hover:text-blue-400">
              Get Directions
            </Link>
          </p>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <h2 className=" mb-4">Follow Us</h2>
          <div className="flex">
            <Link to="" className="mr-4">
              <FaFacebook className="text-xl hover:text-blue-500" />
            </Link>
            <Link to="" className="mr-4">
              <FaTwitter className="text-xl hover:text-blue-500" />
            </Link>
            <Link to="" className="mr-4">
              <FaInstagram className="text-xl hover:text-blue-500" />
            </Link>
          </div>
        </div>
        
      </div>
      <div className="w-full md:w-1/3 px-4 ">
          <h2 className="text-lg mb-2">Subscribe to Our Newsletter</h2>
          <p className="mb-2 text-xs">Sign up to receive updates on new destinations, travel deals, and more.</p>
          <form onSubmit={handleEmailSubscribe} className="flex flex-wrap mb-4">
            <div className="w-full md:w-2/3 pr-2 mb-4 md:mb-0">
              <input
                type="email"
                className="w-full p-3 text-sm text-black border border-gray-600 rounded"
                placeholder="Enter your email"
              />
            </div>
            <div className="w-full md:w-1/3">
              <button type="submit" className="w-full p-3 text-sm bg-blue-500 text-white rounded hover:bg-blue-400">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      <div className="container mx-auto pt-4 border-t text-xs border-gray-600">
        <p className="text-center text-gray-500">
          © 2023 Travel Tour BD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
