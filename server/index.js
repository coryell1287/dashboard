import path from 'path';
import express from 'express';
import cors from 'cors';
import http from 'http';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
import { config } from 'dotenv';

import apollo from './schema'
const port = process.env.PORT || 5000;

const app = express();
const publicPath = path.join(__dirname, '../dist');
const server = http.createServer(app);

config();
apollo.applyMiddleware({ app });
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('morgan')('dev'));
app.use(compression());
app.use(express.static(publicPath));
apollo.installSubscriptionHandlers(server);

app.get('*', async (request, response) => {
  try {
    response.sendFile(path.resolve(publicPath, 'index.html'));
  } catch (e) {
    response.json(new Error('Something went wrong.'));
  }
});

process.on('SIGINT', async () => {
  console.info('SIGINT signal received.');
  try {
    await server.close();
  } catch (error) {
    process.exit(1);
    throw new Error(error)
  }
});

(async () => {
  await server.listen(port);
  console.log(`🚀 Server has started and is listening on ${port}`);
  console.info('Graphql is listing on has started and is listening on', apollo.graphqlPath);
})();

