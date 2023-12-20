import { request, gql } from 'graphql-request';

const endpoint = 'https://nameless-brook-510024.eu-central-1.aws.cloud.dgraph.io/graphql'; // Dgraph Cloud-Endpoint

export const fetchUsers = () => {
  const query = gql`
    query {
      queryUser {
        id
        name
        age
      }
    }
  `;

  return request(endpoint, query);
};

export const addUser = (name, age) => {
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

  return request(endpoint, mutation);
};

export const deleteUser = (id) => {
  const mutation = gql`
    mutation {
      deleteUser(filter: { id: ["${id}"] }) {
        msg
      }
    }
  `;

  return request(endpoint, mutation);
};

export const renameUser = (id, newName) => {
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

  return request(endpoint, mutation);
};