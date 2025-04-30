import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { darkTheme } from './component/Theme/DarkTheme';
import Routers from './component/Routers/Routers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action';
import { findCart } from './component/State/Cart/Action';
import { getRestaurantById } from './component/State/Restaurant/Action';
import process from 'process';

window.process = process;

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  // Selector should grab the whole auth state, not just auth.user
  const auth = useSelector((state) => state.auth);

  const token = auth?.jwt || jwt;

  useEffect(() => {
    if (token) {
      dispatch(getUser(token));
      dispatch(findCart(token));
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(getRestaurantById(token));
    }
  }, [token, dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
