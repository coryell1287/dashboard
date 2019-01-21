import { gql } from 'apollo-server-express';

const queryEntryPoints = gql`
  type RootQuery {
   user(email: String!): User
   authentication(email: String!, password: String!): JWT
  }
`;

export default queryEntryPoints
