import React from 'react';
import ReactDOM from 'react-dom/client';
import "./config/global"
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/js/bootstrap.bundle";
import App from './App';
import { WebsiteSettingsProvider } from 'context/WebsiteSettingsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <WebsiteSettingsProvider>
        <App />
      </WebsiteSettingsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
