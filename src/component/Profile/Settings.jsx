// components/SettingsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

// Local Section component
function Section({ title, children }) {
  return (
    <div style={{
      marginBottom: '30px',
      background: 'black',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0px 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginBottom: '10px' }}>{title}</h2>
      {children}
    </div>
  );
}

// Reusable button style
const buttonStyle = {
  marginBottom: '10px',
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'black',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default function Settings() {
  return (
    <div style={{ padding: '20px', backgroundColor: 'black', minHeight: '100vh' }}>
      {/* Profile */}
      <Section title="Profile Information">
        <Link to="/my-profile/*"><button style={buttonStyle}>View Profile</button></Link>
        <p>Name: Shruti Karmakar</p>
        <p>Email: shrutikarmakar@gmail.com</p>
        <p>Phone: +91 9876543210</p>
      </Section>

      {/* Orders */}
      <Section title="Order History">
        <Link to="/my-profile/order"><button style={buttonStyle}>View Orders</button></Link>
        <p>Order ID: 123456</p>
        <p>Date: 2023-10-01</p>
        <p>Status: Delivered</p>
        <p>Total Amount: ₹500</p>
        <p>Items: Pizza, Burger</p>
        <p>Delivery Address: 123 Street Name, Kolkata</p>
        <p>Payment Method: Credit Card</p>
        <p>Rating: ⭐⭐⭐⭐</p>
        <p>Feedback: Great service!</p>
      </Section>

      {/* Refunds */}
      <Section title="Refund Information">
        <Link to="/refunds"><button style={buttonStyle}> Refunds </button></Link>
        <p>Refund Status: Pending</p>
        <p>Request Date: 2023-10-05</p>
        <p>Amount: ₹500</p>
        <p>Reason: Item not received</p>
        <button>Request Refund</button>
      </Section>

      {/* Other Sections follow same pattern */}
      <Section title="Favorite Restaurants">
        <Link to="/my-profile/favorites"><button style={buttonStyle}>View Favorites</button></Link>
        <p>Restaurant Name: ABC Diner</p>
        <p>Cuisine: Italian</p>
        <p>Location: 789 Food Street, Kolkata</p>
        <p>Rating: ⭐⭐⭐⭐⭐</p>
        <button>Remove from Favorites</button>
      </Section>

      <Section title="Notifications">
        <Link to="/my-profile/notification"><button style={buttonStyle}>View Notifications</button></Link>
        <p>Order Updates: Enabled</p>
        <p>Promotions: Enabled</p>
        <p>New Restaurants: Disabled</p>
        <button>Update Preferences</button>
      </Section>

      <Section title="Settings">
        <Link to="/my-profile/settings"><button style={buttonStyle}>View Settings</button></Link>
        <p>Language: English</p>
        <p>Currency: INR</p>
        <p>Theme: Light</p>
        <button>Change Settings</button>
      </Section>

      <Section title="Account Settings">
        <Link to="/my-profile/account"><button style={buttonStyle}>View Account</button></Link>
        <p>Account Type: User</p>
        <p>Subscription: Basic</p>
        <p>Join Date: 2023-01-01</p>
        <button>Upgrade Subscription</button>
      </Section>

      <Section title="Events">
        <Link to="/my-profile/events"><button style={buttonStyle}>View Events</button></Link>
        <p>Event Name: Food Festival</p>
        <p>Date: 2023-12-01</p>
        <p>Location: City Park, Kolkata</p>
        <button>RSVP</button>
      </Section>

      <Section title="Security">
        <Link to="/my-profile/security"><button style={buttonStyle}>View Security</button></Link>
        <p>Password: ********</p>
        <p>Two-Factor Authentication: Enabled</p>
        <p>Last Login: 2023-10-01</p>
        <button>Change Password</button>
        <button>Enable Two-Factor Authentication</button>
      </Section>

      <Section title="Payment Information">
        <Link to="/my-profile/payment"><button style={buttonStyle}>View Payment</button></Link>
        <p>Credit Card: **** **** **** 1234</p>
        <p>UPI ID: shrutikarmakar@upi</p>
        <button>Add Payment Method</button>
      </Section>

      <Section title="Subscription">
        <Link to="/my-profile/subscription"><button style={buttonStyle}>View Subscription</button></Link>
        <p>Current Plan: Basic</p>
        <p>Next Billing Date: 2023-11-01</p>
        <p>Billing Cycle: Monthly</p>
        <p>Payment Method: Credit Card</p>
        <p>Amount: ₹499</p>
        <p>Status: Active</p>
        <p>Renewal Status: Auto-Renew</p>
        <button>Upgrade Plan</button>
        <button>Cancel Subscription</button>
      </Section>

      <Section title="Feedback">
        <Link to="/my-profile/feedback"><button style={buttonStyle}>View Feedback</button></Link>
        <p>Last Feedback: "Great service!"</p>
        <p>Rating: ⭐⭐⭐⭐⭐</p>
        <p>Comments: "Loved the food quality!"</p>
        <p>Suggestions: "Add more vegetarian options."</p>
        <textarea placeholder="Your Feedback" rows="4" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
        <button>Submit Feedback</button>
      </Section>

      <Section title="Address">
        <Link to="/my-profile/address"><button style={buttonStyle}>View Address</button></Link>
        <p>Address ID: 1</p>
        <p>Home: 123 Street Name, Kolkata</p>
        <p>Work: 456 Business Park, Kolkata</p>
      </Section>

      <Section title="Add New Address">
        <Link to="/my-profile/add-address"><button style={buttonStyle}>Add New Address</button></Link>
        <p>Address ID: 2</p>
        <input type="text" placeholder="Address Type (Home/Work)" /><br />
        <input type="text" placeholder="Street Address" /><br />
        <input type="text" placeholder="City" /><br />
        <input type="text" placeholder="State" /><br />
        <input type="text" placeholder="Zip Code" /><br />
        <button>Add Address</button>
      </Section>

      <Section title="Privacy">
        <Link to="/my-profile/privacy"><button style={buttonStyle}>View Privacy</button></Link>
        <button>Change Password</button><br /><br />
        <button>Enable Two-Factor Authentication</button><br /><br />
        <button>Manage Data</button><br /><br />
        <button>Delete Account</button>
      </Section>

      <Logout />
    </div>
  );
}
