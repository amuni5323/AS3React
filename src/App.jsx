import React, { useState } from 'react';
import LoginForm from './LoginForm';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = (username, password) => {
    
    username === 'admin' && password === 'admin'
      ? (setIsLoggedIn(true), setIsAdmin(true), setShowError(false))
      : (username !== '' && password !== ''
        ? (setIsLoggedIn(true), setIsAdmin(false), setShowError(false))
        : setShowError(true));
  };

  return (
    <div className="container">
      {
        !isLoggedIn
          ? <LoginForm onLogin={handleLogin} showError={showError} />
          : isAdmin
            ? <AdminDashboard />
            : <UserDashboard />
      }
    </div>
  );
}

export default App;
