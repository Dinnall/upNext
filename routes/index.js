/////////////////////////
// Index page - import and organize all api routes. 
// export for use in server
/////////////////////////


//present URL is /api
// With this your calling express router to handle 
// all the routes you write
const router = require('express').Router();


router.use('/user', require('./userRoutes.js'));
router.use('/projects', require('./projectsRoutes.js'));


module.exports = router;  