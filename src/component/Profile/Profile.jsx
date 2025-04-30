import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Logout from './Logout';
import Notification from './Notification';

import Events from '../Events/Events';
import Address from './Address';
import Favorites from './Favorites';
import ProfileNavigation from './ProfileNavigation';
import Refunds from './Refunds';
import Settings from './Settings';
import UserProfile from './UserProfile';
import Order from './Order';


const Profile = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className='lg:flex justify-between'>
      <div className='sticky h-full lg:w-[30%]'>
        <ProfileNavigation open={openSideBar}/>

      </div>
      <div className="lg:w-[100%]">

        <Routes>

          <Route path="/" element={<UserProfile/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/address" element={<Address/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/refunds" element={<Refunds/>}/>
          <Route path="/notification" element={<Notification/>}/>
          <Route path="/logout" element={<Logout/>}/>

        </Routes>
      </div>
      
    </div>
  )
}

export default Profile  