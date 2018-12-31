import { ApolloServer, gql, PubSub } from 'apollo-server-express';
import resolvers from './resolvers';
import UserType from './user/user.type'
import client from '../config/db';
import RootQuery from './root-query/root-query.type'
import RootMutation from './root-mutation/root-mutation.type';
import Subscriptions from './subscriptions/subscription.type';

const pubSub = new PubSub();

const SchemaDefinition = gql`
  schema {
    query: RootQuery,
    mutation: RootMutation,
    subscription: Subscription
  }`;

const apollo = new ApolloServer({
  typeDefs: [SchemaDefinition, RootQuery, RootMutation, Subscriptions, UserType],
  context(request) {
    return { client, pubSub, request }
  },
  resolvers,
  introspection: false,
  playground: false,
});

export default apollo;
