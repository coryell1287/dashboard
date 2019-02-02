import RootQuery from './root-query/root-query.resolvers';
import RootMutation from './root-mutation/root-mutation.resolvers';
import Subscription from './subscriptions/subscription.resolvers';
import { GraphQLUpload as Upload } from 'graphql-upload';

export default {
  RootQuery,
  RootMutation,
  Subscription,
  Upload
}
