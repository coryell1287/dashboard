import { gql } from 'apollo-server-express';

const RootMutation = gql`
  type RootMutation {
    signUp(
      username: String!
      firstname: String!,
      surname: String!,
      email: String!
      password: String!
    ): Applied
   signOut(email: String!): Message
   uploadImage(file: Upload, email: String): Avatar 
  }
`;

export default RootMutation;
