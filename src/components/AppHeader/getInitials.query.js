import gql from 'graphql-tag';

export const GET_INITIALS = gql`
  
 query($email: String!){
  user(email: $email) {
    initial 
  }
 } 
`;


