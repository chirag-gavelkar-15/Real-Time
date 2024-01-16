import React, { useState } from 'react';
// import './UserPage.css'

const UserPage = () => {
   const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', isAdmin: false, gender: 'male' });
  const [error, setError] = useState('');

  const addUser = (e) => {
    e.preventDefault();
    // Basic validation
    if (!newUser.name.trim()) {
      setError('Please enter a name');
      return;
    }

    if (!newUser.email.trim()) {
      setError('Please enter an email');
      return;
    }

    // Check for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newUser.email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Clear the error state if validation passes
    setError('');

    // Update the users state
    setUsers([...users, newUser]);

    // Clear the form after adding a user
    setNewUser({ name: '', email: '', isAdmin: false, gender: 'male' });
  };

  return (
    <div className='mainForm'>
      <div className='regForm'>
        <div className='regForm1'>
          <h2>Create User</h2>
          <input
            type="text"
            placeholder="Name"
            className='input1'
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <br /> <br />
          <input
            type="email"
            placeholder="Email"
            className='input1'
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
           <br /> <br />
           <label>
        <input
          type="checkbox"
          checked={newUser.isAdmin}
          onChange={() => setNewUser({ ...newUser, isAdmin: !newUser.isAdmin })}
        />
        Admin
      </label>
      <br /> <br />
      <label>
        Gender:
        <select
          value={newUser.gender}
          onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
          <br /> <br />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {/* ... rest of the form ... */}
          <button className='btn1' onClick={addUser}>Add User</button>
        </div>
      </div>

      <h2>User List</h2>'
      <table className='mainTable'>
        <div>
      <thead className='thead'>
        <tr>
          {/* <th>ID</th> */}
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Gender</th>

          {/* Add more columns as needed */}
        </tr>
      </thead>
      <tbody>
        {users.map((item,index) => (
          <tr key={index}>
            {/* <td>{item.id}</td> */}
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.isAdmin == true ? 'Admin' :'User'}</td>
            <td>{item.gender == 'male'? 'Male' :'Female'}</td>
            {/* Add more cells as needed */}
          </tr>
        ))}
      </tbody>
      </div>
    </table>
    </div>
  );
};

export default UserPage;
