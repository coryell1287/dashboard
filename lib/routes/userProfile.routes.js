const { getUser } = require('../controller/userProfile.controller');

module.exports = (app) => {
  app.route('/api/userprofile')
    .get(getUser);
};

