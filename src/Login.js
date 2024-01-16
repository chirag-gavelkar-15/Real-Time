import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }

    if (!password.trim()) {
      setError('Please enter a password');
      return;
    }

    // You can perform more advanced validation and authentication logic here
    // For simplicity, let's assume login is successful
    onLogin(username);
  };

  return (
    <div className='userLoginClass'>
      <div className='login'>
        <h2 className='header'>Login</h2>
        <form className='formclass'>
          <input
            type="text"
            placeholder="Username"
            className='inputclass'
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError('');
            }}
          />
          <br /> <br />
          <input
            type="password"
            placeholder="Password"
            className='inputclass'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
          />
          <br /> <br />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button className='loginButton' onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;