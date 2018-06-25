const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const http = require('http');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');

const router = require('./routes/userProfile.routes');

const port = process.env.PORT || 4000;
const app = express();
const publicPath = path.join(__dirname, '../dist');
const server = http.createServer(app);

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(compression());

router(app);

app.use(express.static(publicPath));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(publicPath, 'index.html'));
});

server.listen(port, () => {
  console.log(`Server has started and is listening on ${port}`);
});
