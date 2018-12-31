import { gql } from 'apollo-server-express';

const queryEntryPoints = gql`
  type RootQuery {
   signIn(email: String!, password: String!): User
  }
`;

export default queryEntryPoints
