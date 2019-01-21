import { gql } from 'apollo-server-express';

const userProfileDef = gql`
  type UserProfile {
   user(email: String!): User
  }
  
  type User {
    firstname: String!
    surname: String!
    email: String!
    initial: String!
    online: Boolean!
    tokens: Tokens!
    authorization: Auth! 
  }
  
  type Auth {
    read: Boolean!
    write: Boolean!
  }
  
  type Tokens {
     access: String
     token: String
  }
  
  type Applied {
   applied: Boolean
  }
  
`;

export default userProfileDef;
