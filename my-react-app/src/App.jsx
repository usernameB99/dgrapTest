import React, { useEffect, useState } from 'react';
import { UserForm } from './UserForm';
import { UserList } from './UserList';
import { Gallery } from './Gallery';
import { fetchUsers, addUser, deleteUser, renameUser } from './api';


const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#2d3945',
  padding: '20px',
};

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data.queryUser))
      .catch((error) => console.error(error));
  }, []);

  const handleAddUser = (name, age) => {
    addUser(name, age)
      .then(fetchUsers)
      .catch((error) => console.error(error));
  };

  const handleDeleteUser = (id) => {
    deleteUser(id)
      .then(fetchUsers)
      .catch((error) => console.error(error));
  };

  const handleRenameUser = (id, newName) => {
    renameUser(id, newName)
      .then(fetchUsers)
      .catch((error) => console.error(error));
  };

  return (
    <div style={appStyle}>
      <UserForm addUser={handleAddUser} />
      <Gallery />
      <UserList users={users} deleteUser={handleDeleteUser} renameUser={handleRenameUser} />
    </div>
  );
}

export default App;