const { getPerson } = require('./controller/PersonController');

export default (app) => {
  app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({ data: 'Service is properly working.', type: 'SUCCESSFUL_SERVICE_REQUEST' });
  });
  app.get('/api/person', getPerson);
};
