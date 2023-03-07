import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const TourSDoptions = () => {
  const [selecteOPtions, setSelectedOptions] = useState("");
  const [selectedDuration, setSelectedDurations] = useState('')
  const [keyword, setKeyword] = useState("")
  const { destinationsData, durationsData } = useContext(AuthContext);

//   handle submit

  const handledurationDestination =(e) => {
    e.preventDefault()
    const form = e.target;
    form.reset()
    console.log(selecteOPtions, selectedDuration, keyword);
  }
//   for destinations
  const handledestinationOptinChange = (e) => {
    setSelectedOptions(e.target.value);
  };

//   for duration
  const handleSetDurationchanges =(e) => {
    setSelectedDurations(e.target.value);
  }

  const handleSearchKeyword = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <div>
      <div className="md:mx-44 px-4">
            <form onSubmit={handledurationDestination} className='md:flex flex-grow   gap-1 justify-center items-center  '>
            <div className="bg-white w-full mb-1 md:mb-0 rounded-sm">
            <input 
            type="search" 
            name="search" 
            onChange={handleSearchKeyword}
            placeholder="keyword" 
            className="inline-block appearance-none bg-gray-200  border border-gray-200 text-gray-700  px-4 rounded-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
            />
           </div>
            <div className="bg-white relative w-full mb-1 md:mb-0 rounded-sm">
            <select
              name=""
              id=""
              className="inline-block appearance-none bg-gray-200  border border-gray-200 text-gray-700 px-4 rounded-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
              value={selecteOPtions}
              onChange={handledestinationOptinChange}
            >
              <option value="" className="text-sm">
                Destination
              </option>
              {destinationsData.map((destination) => (
                <option key={destination.value} value={destination.value}>
                  {destination.label}
                </option>
              ))}
            </select>
           </div>
           <div className="bg-white relative w-full mb-1 rounded-sm md:mb-0">
            <select 
            name="" 
            id=""
            className="inline-block appearance-none bg-gray-200  border border-gray-200 text-gray-700  px-4 rounded-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
            value={selectedDuration}
            onChange={handleSetDurationchanges}
            >
            <option value=""> Durations</option>
            {
           
           durationsData.map(duration => (
            <option key={duration.value} value={duration.value}>
                {duration.label}
            </option>
           ))
            }
            </select>
           </div>
           <div className=" w-full">
            <button 
            type="submit"
            className="inline-block appearance-none bg-[#f97654]  border border-gray-200 text-white py-2 px-4 rounded-sm leading-tight  outline-none  focus:border-gray-500 w-full"
            >Search</button>
          </div>
            </form>
      </div>

    </div>
  );
};

export default TourSDoptions;
