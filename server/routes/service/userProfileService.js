const router = require('express').Router();

router.route('/fairy')
  .get(getUser);

function getUser(request, response) {
  return response.send({ message: 'Files in the server directory are watched.' });
}

module.exports = router;
