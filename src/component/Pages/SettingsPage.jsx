// pages/SettingsPage.jsx
import {
    Bell,
    ClipboardList,
    MessageSquare,
    Repeat,
    Shield,
    Star,
    Trash,
    User,
    X
  } from "lucide-react";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";

  

  function SettingsPage() {
    const [selectedSection, setSelectedSection] = useState("User Info");
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const navigate = useNavigate();
  
    const confirmDelete = () => {
      window.location.href = "/";
    };
  
    const sections = {
      "User Info": <UserInfo />,
      Refunds: <Refunds />,
      Notifications: <Notification />,
      Privacy: <Privacy />,
      Subscription: <Subscription />,
      Feedback: <Feedback />,
      Favourites: <Favourites />,
      Orders: <Order />,
    };
  
    return (
      <div className="min-h-screen bg-white dark:bg-black-900 text-black dark:text-white p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Settings</h1>
          <button onClick={() => navigate(-1)}>
            <X className="w-6 h-6 text-gray-600 dark:text-white" />
          </button>
        </div>
  
        <div className="flex gap-6">
          <aside className="w-48 space-y-2">
            <SidebarItem icon={User} label="User Info" selected={selectedSection === "User Info"} onClick={() => setSelectedSection("User Info")} />
            <SidebarItem icon={Repeat} label="Refunds" selected={selectedSection === "Refunds"} onClick={() => setSelectedSection("Refunds")} />
            <SidebarItem icon={Bell} label="Notifications" selected={selectedSection === "Notifications"} onClick={() => setSelectedSection("Notifications")} />
            <SidebarItem icon={Shield} label="Privacy" selected={selectedSection === "Privacy"} onClick={() => setSelectedSection("Privacy")} />
            <SidebarItem icon={ClipboardList} label="Subscription" selected={selectedSection === "Subscription"} onClick={() => setSelectedSection("Subscription")} />
            <SidebarItem icon={ClipboardList} label="Orders" selected={selectedSection === "Orders"} onClick={() => setSelectedSection("Orders")} />
            <SidebarItem icon={Star} label="Favourites" selected={selectedSection === "Favourites"} onClick={() => setSelectedSection("Favourites")} />
            <SidebarItem icon={MessageSquare} label="Feedback" selected={selectedSection === "Feedback"} onClick={() => setSelectedSection("Feedback")} />
  
            <button
              onClick={() => setShowConfirmModal(true)}
              className="flex items-center gap-2 text-red-600 hover:text-red-800 mt-4"
            >
              <Trash className="w-4 h-4" /> Delete Account
            </button>
          </aside>
  
          <main className="flex-1 max-w-2xl w-full">
            {sections[selectedSection]}
          </main>
        </div>
  
        {showConfirmModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full space-y-4">
              <h2 className="text-lg font-semibold">Confirm Deletion</h2>
              <p className="text-sm text-gray-600">
                Are you sure you want to delete your account? This action cannot be undone.
              </p>
              <div className="flex justify-end gap-2">
                <button onClick={() => setShowConfirmModal(false)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
                  Cancel
                </button>
                <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  export default SettingsPage;