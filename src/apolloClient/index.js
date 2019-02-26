import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';


const upload = createUploadLink({
  uri: 'http://localhost:5000/graphql',
});

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id,
});
const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('token');
  return {
    headers: {
      ...headers,
      'x-env-variable': 'dev3',
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

export default new ApolloClient({
  link: authLink.concat(upload),
  cache
});
