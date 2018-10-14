const router = require('express').Router();

router.use('/profile', require('./userProfileService'));
module.exports = router;
