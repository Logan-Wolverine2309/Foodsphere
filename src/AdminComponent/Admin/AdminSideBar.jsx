import {
  Dashboard,
  ShoppingBag,
  ShopTwo,
  Category,
  Fastfood,
  Event,
  AdminPanelSettings,
  Logout,
  Menu as MenuIcon,
} from '@mui/icons-material';
import {
  Divider,
  Drawer,
  IconButton,
  useMediaQuery,
  Tooltip,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logout } from '../../component/State/Authentication/Action';

const menu = [
  { title: 'Dashboard', icon: <Dashboard />, path: '/' },
  { title: 'Orders', icon: <ShoppingBag />, path: '/orders' },
  { title: 'Menu', icon: <ShopTwo />, path: '/menu' },
  { title: 'Food Category', icon: <Category />, path: '/category' },
  { title: 'Ingredients', icon: <Fastfood />, path: '/ingredients' },
  { title: 'Events', icon: <Event />, path: '/event' },
  { title: 'Details', icon: <AdminPanelSettings />, path: '/details' },
  { title: 'Logout', icon: <Logout />, path: '/' },
];

export const AdminSideBar = ({ open, handleClose }) => {
  const isSmallScreen = useMediaQuery('(max-width:1080px)');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const handleNavigate = (item) => {
    if (item.title === 'Logout') {
      dispatch(logout());
      navigate('/');
    } else {
      navigate(`/admin/restaurants${item.path}`);
    }
    if (isSmallScreen) handleClose();
  };

  const isActive = (path) =>
    location.pathname === `/admin/restaurants${path}`;

  return (
    <Drawer
      variant={isSmallScreen ? 'temporary' : 'permanent'}
      open={isSmallScreen ? open : true}
      onClose={handleClose}
      anchor="left"
      sx={{
        '& .MuiDrawer-paper': {
          width: collapsed ? '5rem' : isSmallScreen ? '50vw' : '18vw',
          transition: 'width 0.3s',
          boxSizing: 'border-box',
          paddingTop: '1rem',
        },
      }}
    >
      {/* Collapse Toggle Button */}
      {!isSmallScreen && (
        <div className="flex justify-end px-2">
          <IconButton onClick={() => setCollapsed(!collapsed)}>
            <MenuIcon />
          </IconButton>
        </div>
      )}

      {/* Menu Items */}
      <div className="h-full flex flex-col gap-2 text-[1rem]">
        {menu.map((item, i) => (
          <div key={i}>
            <Tooltip title={collapsed ? item.title : ''} placement="right">
              <div
                onClick={() => handleNavigate(item)}
                className={`px-4 py-3 flex items-center gap-3 cursor-pointer 
                  ${isActive(item.path) ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'}
                `}
              >
                {item.icon}
                {!collapsed && <span>{item.title}</span>}
              </div>
            </Tooltip>
            {i !== menu.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </Drawer>
  );
};

export default AdminSideBar;
