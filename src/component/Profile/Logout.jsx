import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all login information
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    // Redirect to Login page
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
}
