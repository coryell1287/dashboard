const person = require('../routes/personRoutes');
const api = require('../routes/router');
module.exports = (app) => {
  app.use('/api', api);
  app.use('/api/person', person);
};
