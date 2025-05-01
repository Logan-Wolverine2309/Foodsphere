// src/auth/AuthForm.jsx

import React, { useState } from 'react';
import { Button, TextField, Typography, MenuItem, Select } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../State/Authentication/Action';

const AuthForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginInitial = { email: '', password: '' };
  const registerInitial = { fullName: '', email: '', password: '', role: '' };

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
        >
          <Form>
            {isRegistering && (
              <>
                <Field
                  as={TextField}
                  name="fullName"
                  label="Full Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
              </>
            )}

            <Field
              as={TextField}
              name="email"
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              variant="outlined"
            />

            <Field
              as={TextField}
              name="password"
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              variant="outlined"
            />

            {isRegistering && (
              <Field name="role">
                {({ field }) => (
                  <Select
                    {...field}
                    fullWidth
                    displayEmpty
                    margin="normal"
                    variant="outlined"
                    sx={{ mt: 2 }}
                  >
                    {/* <MenuItem value="">Select Role</MenuItem> */}
                    <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
                    <MenuItem value="ROLE_RESTAURANT_OWNER">Restaurant Owner</MenuItem>
                  </Select>
                )}
              </Field>
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

  <div className="mt-4 flex flex-col items-center space-y-2">
    {!isRegistering && (
      <Link to="/forgotpassword" className="text-blue-400 hover:underline">
        Forgot Password?
      </Link>
    )}
    <p>By continuing, i agree to the terms of use & privacy policy.</p>
  </div>
</Typography>

      </div>
    </div>
  );
};

export default AuthForm;
