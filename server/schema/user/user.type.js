import { gql } from 'apollo-server-express';

const userProfileDef = gql`
  type UserProfile {
   user(email: String!): User
  }
  
  type User {
    firstname: String!
    surname: String!
    username: String!
    email: String!
    initial: String!
    online: Boolean!
    tokens: String!
    authorization: Auth! 
  }
  
  type Auth {
    roles: [String]!
    permissions: Permissions!
  }
  
  type Permissions {
     read: Boolean!
     write: Boolean!
  }
  
  type Applied {
   applied: Boolean
  }
  
  type Message {
    message: String!
  }
  
  type Avatar {
    filename: String!
    mimetype: String!
    encoding: String!
  }
  
`;

export default userProfileDef;
