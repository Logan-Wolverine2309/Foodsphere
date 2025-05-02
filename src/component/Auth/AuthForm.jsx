import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../State/Authentication/Action';

const AuthForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginInitial = { email: '', password: '' };
  const registerInitial = {
    fullName: '',
    email: '',
    password: '',
    role: '',
  };

  const handleLogin = (values) => {
    dispatch(loginUser({ userData: values, navigate }));
  };

  const handleRegister = (values) => {
    dispatch(registerUser({ userData: values, navigate }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange via-pink-50 to-white text-white px-4">
      <div className="bg-gray-800 w-full max-w-md p-8 rounded-xl shadow-lg">
        <Typography variant="h5" align="center" gutterBottom>
          {isRegistering ? 'Register' : 'Login'}
        </Typography>

        <Formik
          initialValues={isRegistering ? registerInitial : loginInitial}
          onSubmit={isRegistering ? handleRegister : handleLogin}
          enableReinitialize
        >
          {({ values, handleChange }) => (
            <Form>
              {isRegistering && (
                <TextField
                  name="fullName"
                  label="Full Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={values.fullName}
                  onChange={handleChange}
                />
              )}

              <TextField
                name="email"
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
              />

              <TextField
                name="password"
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                value={values.password}
                onChange={handleChange}
              />

              {isRegistering && (
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="role-label" style={{ color: '#fff' }}>
                    Select Role
                  </InputLabel>
                  <Select
                    labelId="role-label"
                    name="role"
                    value={values.role || ''}
                    onChange={handleChange}
                    label="Select Role"
                    variant="outlined"
                    style={{ backgroundColor: '' }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
                    <MenuItem value="ROLE_RESTAURANT_OWNER">Restaurant Owner</MenuItem>
                  </Select>
                </FormControl>
              )}

              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 3, py: 1.5 }}
              >
                {isRegistering ? 'Register' : 'Login'}
              </Button>
            </Form>
          )}
        </Formik>

        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          {isRegistering ? 'Already have an account?' : "Don't have an account?"}
          <Button
            size="small"
            onClick={() => setIsRegistering(!isRegistering)}
            sx={{ ml: 1 }}
            color="secondary"
          >
            {isRegistering ? 'Login' : 'Register'}
          </Button>
        </Typography>
      </div>
    </div>
  );
};

export default AuthForm;
