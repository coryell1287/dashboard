import { gql } from 'apollo-server-express';

const userProfileDef = gql`
  type UserProfile {
   user(email: String!): User
  }
  
  type User {
    id: ID!
    firstname: String!
    surname: String!
    username: String!
    email: String!
    initials: String!
    online: Boolean!
    tokens: String!
    avatar: String
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
    avatar: String
  }
`;

export default userProfileDef;
