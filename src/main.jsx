import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App";
import './App.css';
import { store } from './component/State/store';
import { BrowserRouter } from 'react-router-dom';
import process from 'process';
import { Provider } from 'react-redux';
window.process = process;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
  </StrictMode>
);
