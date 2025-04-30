import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "../About/About";
import Auth from "../Auth/Auth";
import Cart from "../Cart/Cart";
import Contact from "../Contact/Contact";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import Help from "../Help/Help";
import Home from "../Home/Home";
import Offers from "../Offers/Offers";
// import Login from '../Pages/Login'
// import Register from '../Pages/Register'
import Navbar from "../Navbar/Navbar";
import PaymentPage from "../Payment/PaymentPage";
import PaymentSuccess from "../PaymentSuccess/PaymentsSuccess";
// import Address from '../Profile/Address'
// import Favorites from '../Profile/Favorites'
// import Logout from '../Profile/Logout'
// import Notification from '../Profile/Notification
import Profile from "../Profile/Profile";
// import Refunds from '../Profile/Refunds'
// import Settings from '../Profile/Settings'
import RestaurantDetails from "../Restaurant/RestaurantDetails";
import Search from "../Search/Search";
import Terms from "../Term/Terms";
import Feedback from "../Feedback/Feedback";
import UserAvatar from "../UserAvatar/UserAvatar";
import Settings from "../Profile/Settings";


const CustomerRoute = () => {
  const location = useLocation();
  // const hideNavbar = location.pathname === "/login" || location.pathname === "/register";
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {/* {hideNavbar && <Navbar />} */}
      <Navbar />
      <Routes>
        {/* {!isAuthenticated ? (
          <>
            <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        )} */}

        <Route path="/" element={<Home />} />
        <Route path="/account/:register" element={<Home />} />
        <Route path="/resturant/city/:title/:id" element={<RestaurantDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="terms" element={<Terms />} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/useravatar" element={<UserAvatar />} />
        
      </Routes>

      <Auth />
    </div>
  );
};

export default CustomerRoute;
