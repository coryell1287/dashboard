import gql from 'graphql-tag';

export const UPLOAD_AVATAR = gql`
  mutation($file: Upload, $email: String){
    uploadImage(file: $file, email: $email){
      avatar
    }
  }
`;
