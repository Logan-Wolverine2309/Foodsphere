import React, { useState } from 'react';
import {
  UserCircle,
  CreditCard,
  MapPin,
  Cog,
  Star,
  ShoppingBag,
} from 'lucide-react';

const menuItems = [
  { name: 'Orders', icon: ShoppingBag },
  { name: 'Swiggy One', icon: Star },
  { name: 'Favourites', icon: HeartIcon },
  { name: 'Payments', icon: CreditCard },
  { name: 'Addresses', icon: MapPin },
  { name: 'Settings', icon: Cog },
];

function HeartIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.657l-6.828-6.829a4 4 0 010-5.656z" />
    </svg>
  );
}

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('Orders');

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Jit Mondal</h1>
          <p className="text-sm text-gray-700">8100420780 • jai9674yaaa@gmail.com</p>
          <button className="mt-4 border border-white text-white px-4 py-1 bg-teal-700 rounded hover:bg-teal-800">Edit Profile</button>
        </div>
        <div className="space-y-2">
          {menuItems.map(({ name, icon: Icon }) => (
            <div
              key={name}
              onClick={() => setActiveTab(name)}
              className={`flex items-center space-x-3 px-4 py-2 rounded cursor-pointer ${
                activeTab === name ? 'bg-white text-black font-semibold' : 'text-gray-800 hover:bg-white'
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
              Your orders with Swiggy will be listed here.
            </p>
            <img
              src="https://cdn.dribbble.com/users/1554528/screenshots/3512647/media/0dd55cb6eb443f429f7259f4e2a9d537.png"
              alt="No orders"
              className="w-40 mx-auto mb-4"
            />
            <p className="text-orange-500">Go ahead and find some awesome restaurants near you...</p>
            <h2 className="text-xl font-bold mt-4">No Orders</h2>
            <p className="text-sm text-gray-600">You haven’t placed any order yet.</p>
          </div>
        )}
        {activeTab !== 'Orders' && (
          <div className="text-center mt-20 text-gray-500 text-lg">
            {activeTab} content coming soon...
          </div>
        )}
      </div>
    </div>
  );
}
