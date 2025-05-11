import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FeedbackIcon from "@mui/icons-material/Feedback";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import LogoutIcon from "@mui/icons-material/Logout";

const menuItems = [
  { title: "Orders", icon: <ShoppingBagIcon />, path: "order" },
  { title: "Favourites", icon: <FavoriteIcon />, path: "favourites" },
  { title: "Addresses", icon: <AddLocationAltIcon />, path: "address" },
  { title: "Notifications", icon: <NotificationsIcon />, path: "notification" },
  { title: "Refunds", icon: <CurrencyRupeeIcon />, path: "refunds" },
  { title: "Feedback", icon: <FeedbackIcon />, path: "feedback" },
  { title: "Edit Profile", icon: <AccountCircleIcon />, path: "user-info" },
  { title: "Logout", icon: <LogoutIcon />, path: "logout" },
  { title: "DeleteAccount", icon: <DeleteIcon />, path: "delete-account" },
];
function UserProfile() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-6">
        <div className="mb-8">
          {/* <h1 className="text-2xl font-bold text-gray-900">{formData.name}</h1>
          <p className="text-sm text-gray-700">
            {formData.phone} • {formData.email}
          </p> */}
        </div>
        <div className="space-y-2">
          {menuItems.map((item) => (
            <div
              key={item.title}
              onClick={() => navigate(item.path)}
              className={`flex items-center space-x-3 px-4 py-2 rounded cursor-pointer ${
                location.pathname.includes(item.path)
                  ? "bg-white text-black font-semibold"
                  : "text-gray-800 hover:bg-white"
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Main content area */}
      <div className="flex-1 bg-black p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
export default UserProfile;