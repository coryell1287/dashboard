export default (app) => {
  app.get('/rest', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({ data: 'Service is properly working.', type: 'SUCCESSFUL_SERVICE_REQUEST' });
  });
};
