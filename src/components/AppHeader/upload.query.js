import gql from 'graphql-tag';

export const UPLOAD_AVATAR = gql`
  mutation($file: Upload){
    uploadImage(file: $file){
      filename
    }
  }
`;
