import React, { useState } from 'react';

const listStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '10px',
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
};

const itemStyle = {
  border: '1px solid #ddd',
  padding: '10px', 
  borderRadius: '10px',
  backgroundColor: '#455866',
};

export const UserList = ({ users, deleteUser, renameUser }) => {
  const [newName, setNewName] = useState('');

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Alle Benutzer</h1>
      <div style={listStyle}>
        {users.map((user) => (
          <div key={user.id} style={itemStyle}>
            <h2>{user.name}</h2>
            <p>{user.age}</p>
            <input type="text" placeholder="Neuer Name" value={newName} onChange={(e) => setNewName(e.target.value)} />
            <button onClick={() => renameUser(user.id, newName)}>Umbenennen</button>
            <button onClick={() => deleteUser(user.id)}>Löschen</button>
          </div>
        ))}
      </div>
    </div>
  );
};