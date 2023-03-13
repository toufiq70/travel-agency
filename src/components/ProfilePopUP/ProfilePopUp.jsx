import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ProfilePopUp = () => {

    // from context
    const{user, logOut, setUser} = useContext(AuthContext);


    
    // declare state for menu icon
    const [toggle , setToogle] = useState(false)
    // declare state for profile
    const [profile , setProfile] = useState(false);
    const profileRef = useRef(null)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if(profileRef.current && !profileRef.current.contains(event.target)){
                setProfile(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    },[profileRef]);

    //  toggle profile
    const toogleProfile = () => {
        setProfile(!profile);
    }




    return (
        <div>
            <div>
                        
                        <div className='pl-4 '>
                            <img onClick={toogleProfile} src={user.photoURL} alt="" className='object-cover w-[2.5rem] h-[2.5rem] rounded-full ring-2 ring-red-500 active:ring-offset-1  cursor-pointer transition duration-500 ring-offset-1'/>
                        </div>
                        { profile &&
                            <div ref={profileRef}
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="150"
                                data-aos-duration="1000"
                                className='bg-slate-800 absolute right-0 top-24 shadow-md rounded-md '>
                                <div className='flex items-center flex-col justify-center text-white w-[20rem] p-6'>
                                    <p className='text-center font-semibold'>Profile</p>
                                    <Link to=''>
                                       
                                        <div className='max-w-full'>
                                        <img 
                                            src={user?.photoURL}
                                            alt="" 
                                            className='rounded-full my-2 object-cover w-[100px] h-[100px]' /> 
                                        </div>
                                    </Link>
                                    <p>{user.displayName}</p>
                                    <p>{user.email}</p>
                                    <a href="/register">
                                    <button 
                                        className='outline-none bg-red-500 rounded-md px-3 py-1 mt-3 text-sm'
                                       >
                                        Log Out
                                    </button>
                                    </a>
                                </div>
                            </div>
                        }
                    </div>
        </div>
    );
};

export default ProfilePopUp;