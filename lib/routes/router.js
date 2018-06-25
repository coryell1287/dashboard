const person = require('./personRoutes');
const profile = require('./userProfile.routes');

export default (app) => {
  app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({ data: 'Service is properly working.', type: 'SUCCESSFUL_SERVICE_REQUEST' });
  });
  person(app);
  profile(app);
};
