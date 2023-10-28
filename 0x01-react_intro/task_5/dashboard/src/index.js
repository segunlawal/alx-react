import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import Notifications from './Notifications/Notifications';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Notifications />
    <App />
  </React.StrictMode>,
);
