import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa";

const Headers = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const { headersLink ,user} = useContext(AuthContext);
  // console.log(headersLink);
  
  return (
    <header className="">
      <nav className="  bg-white shadow-lg py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-auto font-[Inter]">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-800">
              TRAVEl <span className="text-red-500">Tour</span> BD
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {headersLink.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.url}
                  className={({isActive}) => isActive ? 'px-3 py-2 text-purple-600 transition duration-300 font-medium' : 'px-3 py-2 text-gray-800 hover:text-gray-700 font-medium transition duration-300'}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-gray-700 transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white h-auto">
          <div className="px-2 pt-2 pb-3">
            {headersLink.map((link) => (
              <NavLink
                key={link.id}
                to={link.url}
                className={({isActive}) => isActive ? 'block px-3 py-2 text-purple-600 transition duration-300 font-medium' : 'block px-3 py-2 text-gray-800 hover:text-gray-700 font-medium transition duration-300'}
                onClick={closeMobileMenu}
              >
                {link.name}
              </NavLink>
            ))}

            <div className="ml-4"></div>
          </div>
        </div>
      )}
    </nav>
    </header>
  );
};

export default Headers;
