import { request, gql } from 'graphql-request';

const endpoint = 'https://nameless-brook-510024.eu-central-1.aws.cloud.dgraph.io/graphql'; // Dgraph Cloud-Endpunkt

const mutation = gql`
  mutation {
    addUser(input: [{ name: "Alice", age: 30 }]) {
      user {
        id
        name
        age
      }
    }
  }
`;

request(endpoint, mutation)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));