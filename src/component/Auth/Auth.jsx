import { Modal, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 420 },
  bgcolor: 'white',
  borderRadius: 2,
  boxShadow: 24,
  p: 0,
  maxHeight: '90vh',
  overflowY: 'auto',
};

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === '/account/login';
  const isRegister = location.pathname === '/account/register';

  return (
    <Modal open={isLogin || isRegister} onClose={() => navigate('/')}>
      <Box sx={modalStyle}>
        <AuthForm mode={isLogin ? 'login' : 'register'} />
      </Box>
    </Modal>
  );
};

export default Auth;
