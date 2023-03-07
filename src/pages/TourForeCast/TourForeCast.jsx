import React, { useContext } from "react";
import {FaServicestack} from 'react-icons/fa'
import {SiYourtraveldottv} from 'react-icons/si'
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const TourForeCast = () => {

    const {tourForeCastData} = useContext(AuthContext)
  return (
    <div className="md:mx-36 bg-[#f97654] ">
      <div className="flex  justify-between items-center py-4 gap-5 px-10">
        <div className="flex flex-wrap md:flex-nowrap gap-2">
            {
                tourForeCastData.map(foreCast => (
                    <div key={foreCast.id}className='flex ' >
                        
                      
                        <span className="text-white text-2xl "><FaServicestack></FaServicestack></span>
         
                        <div className="ml-3 text-white">
                            <p className="uppercase text-sm leading-2">{foreCast.title}</p>
                            <p className="text-xs leading-tight pt-1 text-justify pr-10">{foreCast.desInfo}</p>
                        </div>
                    </div>
                ))
            }
            
        </div>
        
       
      </div>
    </div>
  );
};

export default TourForeCast;
