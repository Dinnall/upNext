const router = require('express').Router();

//present URL is /api

router.use('/user', require('./user-router'));
router.use('/listing', require('./listing-router'));

module.exports = router;