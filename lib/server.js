import path from 'path';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import router from './router';

const port = process.env.PORT || 4000;
const app = express();
const publicPath = path.join(__dirname, '../dist');
const server = http.createServer(app);

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('combined'));

router(app);

app.use(express.static(publicPath));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(publicPath, 'index.html'));
});

server.listen(port, () => {
  console.log(`Server has started and is listening on ${port}`);
});

