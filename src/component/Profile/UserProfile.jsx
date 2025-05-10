import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  UserCircle,
  CreditCard,
  MapPin,
  Cog,
  Star,
  ShoppingBag,
} from 'lucide-react';
import Order from './Sections/Order';

// Optional Redux action (if you have one)
// import { updateProfile } from '../redux/actions/authActions';

function HeartIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.657l-6.828-6.829a4 4 0 010-5.656z" />
    </svg>
  );
}

const menuItems = [
  { name: 'Orders', icon: ShoppingBag },
  { name: 'Favourites', icon: HeartIcon },
  { name: 'Payments', icon: CreditCard },
  { name: 'Addresses', icon: MapPin },
  { name: 'Notifications', icon: Star },
  { name: 'Refunds', icon: Star },
  { name: 'Contact Us', icon: Star },
  { name: 'Feedback', icon: Star },
  { name: 'Edit Profile', icon: Cog },
  { name: 'Logout', icon: UserCircle },
];

export default function UserProfile() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState('Orders');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Sync form with Redux user data when user changes
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
      });
    }
  }, [user]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Optional: dispatch update to backend or Redux
    // dispatch(updateProfile(formData));

    // Simulate update locally
    alert('Profile updated!');
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">{formData.name}</h1>
          <p className="text-sm text-gray-700">
            {formData.phone} • {formData.email}
          </p>
          {/* <button
            onClick={() => setActiveTab('Edit Profile')}
            className="mt-4 border border-black text- px-4 py-1 bg-teal-700 rounded hover:bg-teal-800"
          >
          
          </button> */}
        </div>
        <div className="space-y-2">
          {menuItems.map(({ name, icon: Icon }) => (
            <div
              key={name}
              onClick={() => setActiveTab(name)}
              className={`flex items-center space-x-3 px-4 py-2 rounded cursor-pointer ${
                activeTab === name
                  ? 'bg-white text-black font-semibold'
                  : 'text-gray-800 hover:bg-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        {activeTab === 'Orders' && (
          <div className="text-center mt-20">
            <p className="text-orange-500 font-semibold mb-2">
              Your orders with Foodsphere will be listed here.
            </p>
            <img
              src="https://cdn.dribbble.com/users/1554528/screenshots/3512647/media/0dd55cb6eb443f429f7259f4e2a9d537.png"
              alt="No orders"
              className="w-40 mx-auto mb-4"
            />
            <p className="text-orange-500">
              Go ahead and find some awesome restaurants near you...
            </p>
            <h2 className="text-xl font-bold mt-4">No Orders</h2>
            <p className="text-sm text-gray-600">You haven’t placed any order yet.</p>
          </div>
        )}

        {activeTab === 'Edit Profile' && (
          <div className="max-w-lg mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Profile</h2>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Phone"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <button
                type="submit"
                className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800"
              >
                Save Changes
              </button>
            </form>
          </div>
        )}

        {activeTab !== 'Orders' && activeTab !== 'Edit Profile' && (
          <div className="text-center mt-20 text-gray-500 text-lg">
            {activeTab} Loading...
          </div>
        )}
      </div>
    </div>
  );
}
