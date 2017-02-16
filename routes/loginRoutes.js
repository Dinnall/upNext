const router = require('express').Router();
const User = require('../models').User

//handles the initial log in 
// function userLogin(req, res) {
// 	var userInfo = req.body;
// 	User.sync()
// 	.then(() => {
// 		return User.findOne({
// 			where: {
// 				email: userInfo.email,
// 				password: userInfo.password
// 			}
// 		})
// 	})
// 	.then((user) => {
// 		if(user) {
// 			req.session.email = user.email
// 			req.session.UserId = user.id;
// 			req.session.save();
// 			console.log('Updated session', req.session);
// 			console.log(user.id)
// 			res.send(user.id)
// 		} else {
// 			res.send('Incorrect User or Password')
// 		}
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 		res.sendStatus(500)
// 	})
// };

// router.route('/login')
// 	.post(login)

module.exports = router