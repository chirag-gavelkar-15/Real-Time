import React, { useState } from 'react';
import Login from './Login';
import UserPage from './UserPage';
import LiveMonitor from './LiveMonitor';
import io from 'socket.io-client';

const App = () => {
  const [user, setUser] = useState(null);
  const [socket, setSocket] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
    const newSocket = io('http://localhost:3001'); // Replace with your server URL
    setSocket(newSocket);
  };

  return (
    <div>
      {user ? (
        <>
          <h1 className='headerName'>Welcome, {user}!</h1>
          <UserPage />
          <LiveMonitor socket={socket} />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;