

import React, { useEffect, useState } from 'react';
import { request, gql } from 'graphql-request';

const endpoint = 'https://nameless-brook-510024.eu-central-1.aws.cloud.dgraph.io/graphql'; // Dgraph Cloud-Endpoint

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [newName, setNewName] = useState('');

  const fetchUsers = () => {
    const query = gql`
      query {
        queryUser {
          id
          name
          age
        }
      }
    `;

    request(endpoint, query)
      .then((data) => setUsers(data.queryUser))
      .catch((error) => console.error(error));
  };

  const addUser = () => {
    const mutation = gql`
      mutation {
        addUser(input: [{ name: "${name}", age: ${age} }]) {
          user {
            id
            name
            age
          }
        }
      }
    `;

    request(endpoint, mutation)
      .then(fetchUsers)
      .catch((error) => console.error(error));
  };

  const deleteUser = (id) => {
    const mutation = gql`
      mutation {
        deleteUser(filter: { id: ["${id}"] }) {
          msg
        }
      }
    `;

    request(endpoint, mutation)
      .then(fetchUsers)
      .catch((error) => console.error(error));
  };

  const renameUser = (id) => {
    const mutation = gql`
      mutation {
        updateUser(input: { filter: { id: ["${id}"] }, set: { name: "${newName}" } }) {
          user {
            id
            name
            age
          }
        }
      }
    `;

    request(endpoint, mutation)
      .then(fetchUsers)
      .catch((error) => console.error(error));
  };

  useEffect(fetchUsers, []);

  return (
    <div style={{ margin: '0 auto', maxWidth: '600px', padding: '20px' }}>
      <h1>Benutzer hinzufügen</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Alter" value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={addUser}>Hinzufügen</button>

      <h1>Alle Benutzer</h1>
      {users.map((user) => (
        <div key={user.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0', borderRadius: '10px' }}>
          <h2>{user.name}</h2>
          <p>{user.age}</p>
          <input type="text" placeholder="Neuer Name" value={newName} onChange={(e) => setNewName(e.target.value)} />
          <button onClick={() => renameUser(user.id)}>Umbenennen</button>
          <button onClick={() => deleteUser(user.id)}>Löschen</button>
        </div>
      ))}
    </div>
  );
}

export default App;
