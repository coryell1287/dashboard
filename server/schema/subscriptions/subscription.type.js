import { gql } from 'apollo-server-express';

const RootSubscription = gql`
  type Subscription {
   activeUsers: Info!
  }
  
  type Info {
   data: Int!
   mutation: MutationType!
  }
  
  enum MutationType {
    NEW_USER_SIGNED_IN
  }
`;

export default RootSubscription;
