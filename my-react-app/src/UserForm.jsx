import React, { useState } from 'react';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#455866',
  borderRadius: '5px',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
};

export const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    
    <div style={formStyle}>
      <h1>Benutzer hinzufügen</h1>
      <p>Hallo! Das hier ist ein Projekt, das ich für eine Präsentation gemacht habe. Es ist mit meiner Dgraph-Datenbank verbunden. Wenn hier ein Name geändert wird, wird auch dieser in der Datenbank geändert.
        Ebenfalls sind hier auch die Folien meiner Präsentation eingefügt.</p>
      <input style={inputStyle} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input style={inputStyle} type="number" placeholder="Alter" value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={() => addUser(name, age)}>Hinzufügen</button>
    </div>
  );
};