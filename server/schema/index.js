import { ApolloServer, gql, PubSub } from 'apollo-server-express';
import resolvers from './resolvers';
import UserType from './user/user.type'
import AuthType from './user/authentication.type'
import client from '../config/db';
import RootQuery from './root-query/root-query.type'
import RootMutation from './root-mutation/root-mutation.type';
import Subscriptions from './subscriptions/subscription.type';

const pubSub = new PubSub();
const isDev = process.env.NODE_ENV === 'development';


const SchemaDefinition = gql`
  schema {
    query: RootQuery,
    mutation: RootMutation,
    subscription: Subscription
  }`;

const upload = gql`
  scalar Upload
`;

const apollo = new ApolloServer({
  typeDefs: [SchemaDefinition, RootQuery, RootMutation, Subscriptions, upload, UserType, AuthType],
  resolvers,
  context({ req }) {
    return { client, pubSub, req }
  },
  introspection: isDev,
  playground: isDev,
});

export default apollo;
