import gql from 'graphql-tag';

export const GET_PROFILE = gql`
 query($email: String!){
  user(email: $email) {
    id,
    initials,
    avatar,
  }
 } 
`;


