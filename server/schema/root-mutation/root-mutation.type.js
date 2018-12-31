import { gql } from 'apollo-server-express';

const RootMutation = gql`
  type RootMutation {
    createUser(
      firstname: String!,
      surname: String!,
      email: String!
      password: String!
    ): Applied
  }
`;

export default RootMutation;
