import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // Add .js extension
import reportWebVitals from './reportWebVitals.js'; // Add .js extension

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();

