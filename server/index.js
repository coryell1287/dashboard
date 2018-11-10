const path = require('path');
const express = require('express');
const cors = require('cors');
const http = require('http');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');

const port = process.env.PORT || 5000;
const app = express();
const publicPath = path.join(__dirname, '../dist');
const server = http.createServer(app);


app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(require('morgan')('dev'));
app.use(compression());
app.use(express.static(publicPath));

app.use(require('./routes'));

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
    console.log(error);
    process.exit(1);
  }
});

(async () => {
  await server.listen(port);
  console.log(`Server has started and is listening on ${port}`);
})();
