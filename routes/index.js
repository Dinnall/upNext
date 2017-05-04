const router = require('express').Router();

router.use('/user', require('./user_routes.js'));
router.use('/projects', require('./project_routes.js'));

module.exports = router;
