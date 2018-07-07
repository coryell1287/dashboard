const { getPerson } = require('../controller/PersonController');

module.exports = (app) => {
  app.route('/api/person')
    .get(getPerson);
};

