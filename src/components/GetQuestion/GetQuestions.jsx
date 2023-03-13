import React from 'react';
import { BsVoicemail } from 'react-icons/bs';
import {MdOutlineDialerSip} from 'react-icons/md'
import { Link } from 'react-router-dom';
const GetQuestions = ({tourDetails}) => {
    
    return (
        <div className='relative'>
            <img src={tourDetails.photos[0]}  className='w-full object-cover' alt="" />
            <div className='bg-pink-600 opacity-80 text-white absolute inset-0 w-full px-4 py-4'>
                <div className='flex flex-col items-center justify-start text-xs'>
                    <p className='text-2xl font-semibold'
                    >Get aQuestion?</p>
                    <p className='py-4'>Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.</p>
                    <div className="flex items-center justify-start text-xl ">
                        <span className='mx-4 text-sm'>
                            <MdOutlineDialerSip></MdOutlineDialerSip>
                        </span>
                        <Link to='' className=''>+88017779764552</Link>
                    </div>
                    <div className="flex items-center justify-start text-xl">
                        <span className='mx-4 text-sm'>
                            <BsVoicemail></BsVoicemail>
                        </span>
                        <Link to=''>help@toufiqbd.com</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetQuestions;