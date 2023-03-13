import React from "react";
import {TbCurrencyDollar} from 'react-icons/tb'
const WhyUs = () => {
  return (
    <div className="my-6 bg-slate-100  py-6">
      <p className="text-[1rem] font-medium mb-2 px-4">Why Book With Us ?</p>
      <div className="flex flex-col text-sm text-gray-600">
        <div className="flex items-center pb-2 border-b border-gray-400">
            <TbCurrencyDollar className="text-red-500 mx-4"></TbCurrencyDollar>
            <p className="">No-hassle best price guarantee
            </p>
        </div>
        <div className="flex items-center pb-2 border-b border-gray-400">
            <TbCurrencyDollar className="text-red-500 mx-4"></TbCurrencyDollar>
            <p className="">Customer care available 24/7
            </p>
        </div>
        <div className="flex items-center pb-2 border-b border-gray-400">
            <TbCurrencyDollar className="text-red-500 mx-4"></TbCurrencyDollar>
            <p className="">Hand-picked Tours & Activities
            </p>
        </div>
        <div className="flex items-center ">
            <TbCurrencyDollar className="text-red-500 mx-4"></TbCurrencyDollar>
            <p className="">Free Travel Insureance
            </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
