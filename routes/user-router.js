const userRouter = require('express').Router();
const User = require('../models').User;
const Listing = require('../models').Listing;

const getOneUser = (req, res) => {
	User.findById(req.params.id, {
		include: [Listing]
	})
	.then((user) => {
		res.send(user)
	})
	.catch((err) => {
		console.log("ERROR GETTING ONE USER =====>", err)
		res.sendStatus(500)
	})
}


//present url is /api/user
userRouter.route('/:id')
	.get(getOneUser)

module.exports = userRouter;