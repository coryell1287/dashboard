import gql from 'graphql-tag';

export const GET_TOKEN = gql`
  query($email: String!, $password: String!){
    authentication(email: $email, password: $password){
      token
    }
  }
`;
