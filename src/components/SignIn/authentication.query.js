import gql from 'graphql-tag';

export const GET_TOKEN = gql`
  query($email: String!, $password: String!){
    authentication(email: $email, password: $password){
      token
    }
  }
`;



export const CREATE_NEW_USER = gql`
  mutation(
    $username: String!, 
    $firstname: String!, 
    $surname: String!, 
    $email: String!, 
    $password: String!) {
    signUp(
    username: $username
    firstname: $firstname, 
    surname: $surname, 
    email: $email, 
    password: $password){
     applied
    }
 }
`;
