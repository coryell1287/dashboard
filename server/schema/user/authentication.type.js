import { gql } from 'apollo-server-express';

const authenticationDef = gql`
  type Authentication {
   authentication(email: String!, password: String!): JWT!
  }
  
  type JWT {
    token: String!
  }
`;

export default authenticationDef;
