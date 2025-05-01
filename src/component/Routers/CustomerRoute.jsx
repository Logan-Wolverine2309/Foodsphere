import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "../About/About";
import Cart from "../Cart/Cart";
import Contact from "../Navbar/Contact";
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
import AuthForm from "../Auth/AuthForm";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

const CustomerRoute = () => {
  const location = useLocation();

  // Define paths where you want to hide the navbar
  const hideNavbarRoutes = ["/", "/authform", "/forgotpassword"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<AuthForm />} /> {/* Default landing page */}
        <Route path="/home" element={<Home />} />
        <Route path="/account/:register" element={<Home />} />
        <Route path="/resturant/city/:title/:id" element={<RestaurantDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/useravatar" element={<UserAvatar />} />
        <Route path="/settingsdrawer" element={<SettingsDrawer />} />
        <Route path="/authform" element={<AuthForm />} />
      </Routes>
    </div>
  );
};

export default CustomerRoute;
