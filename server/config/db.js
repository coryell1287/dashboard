import dse from 'dse-driver';

const client = new dse.Client({
  contactPoints: ['127.0.0.1'],
  keyspace: 'chatter'
});

export default client;
