import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextProvider } from './context/Contex';
import 'react-toastify/dist/ReactToastify.min.css'; 
ReactDOM.render(
  <ContextProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </ContextProvider>,
  document.getElementById('root')
);