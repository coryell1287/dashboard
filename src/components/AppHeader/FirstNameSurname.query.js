import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';

const name = {

};
let tempName = [];
const FirstnameSurname = () => (
  <Query
    query={gql`
      {
        signIn(email: "cass@gmail.com", password: "fs;hl29") {
          firstname
          surname
          initial
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) {
        return <p>Error :(</p>
      }
      //
      return (
        <div>
          <span>{data.signIn.initial}</span>
        </div>
      )
    }}
  </Query>
);

export default FirstnameSurname;
