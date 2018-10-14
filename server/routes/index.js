const router = require('express').Router();

router.use('/api', require('./service'));

module.exports = router;
