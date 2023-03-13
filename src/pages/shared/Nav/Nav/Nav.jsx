import React from 'react';
import Announcement from '../Announcement/Announcement';
import Headers from '../Header/Headers';

const Nav = () => {
    return (
        <div className=''>
            <Announcement/>
            <div className=''>
            <Headers/>
            </div>
        </div>
    );
};

export default Nav;