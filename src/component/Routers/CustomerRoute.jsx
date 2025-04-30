import React, { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import About from "../About/About";
import Auth from "../Auth/Auth";
import Cart from "../Cart/Cart";
import Contact from "../Navbar/Contact";
import ForgotPassword from "../Auth/ForgotPassword";
import Help from "../Help/Help";
import Home from "../Home/Home";
import Offers from "../Offers/Offers";
import Navbar from "../Navbar/Navbar";
import PaymentSuccess from "../PaymentSuccess/PaymentsSuccess";
import RestaurantDetails from "../Restaurant/RestaurantDetails";
import Search from "../Search/Search";
import Terms from "../Term/Terms";
import UserAvatar from "../UserAvatar/UserAvatar";
import SettingsDrawer from "../SettingsDrawer/Index";
import PaymentPage from "../Payment/PaymentPage";


const CustomerRoute = () => {
  const location = useLocation();

  return (
    <div>
     
      <Navbar />
      <Routes>
        

        <Route path="/" element={<Home />} />
        <Route path="/account/:register" element={<Home />} />
        <Route path="/resturant/city/:title/:id" element={<RestaurantDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="terms" element={<Terms />} />
        {/* <Route path="/feedback" element={<Feedback/>} /> */}
        <Route path="/useravatar" element={<UserAvatar />} />
        <Route path="/settingsdrawer" element={<SettingsDrawer/>}/>
        
      </Routes>

      <Auth />
    </div>
  );
};

export default CustomerRoute;
