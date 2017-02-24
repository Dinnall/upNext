const router = require('express').Router();

// Require in the models you will need to build out your routes;
const User = require('../models').User;
const Projects = require('../models').Projects;
const Picture = require('../models').Picture;



//********* Post a new User *********

function postNewUser(req, res) {
	console.log(req.body)
	User.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password:req.body.password,
		imageUrl:req.body.imageUrl,
		bio: req.body.bio,
		linkedin: req.body.linkedin

	})
	.then(function(newUser) {
		console.log(newUser)

		res.send(newUser)
	})
}


// ********** GET one User **********

function getOneUser(req,res){
	User.findById(req.params.id,{
		include: [Projects]
	})

	.then(function(user){
		res.send(user)
	})
}

// ********** GET one User by ID **********

function findByEmail(req,res){
	User.findOne({
		where: {
			email: req.body.email,
			password: req.body.password
		}
	})
	.then(function(user){
		res.send(user)
	})
}

// ********** GET all Users **********
function getAllUsers(req, res) {
	User.findAll({})
		.then(function(data) {
			res.send(data)
		})
		.catch(function(error){
			console.log("ERROR returning all Users in database:", error);
			res.sendStatus(500);
		})
}


// ********** DELETE a User by id **********
function deleteUser(req, res) {
	User.findById(req.params.id)
	.then((user)=> {
		user.destroy()
	})
	.then(()=> {
		res.send('User has been deleted')
	})
}

// ********** ROUTES **********
router.route('/')
	.get(getAllUsers)
	.post(postNewUser)

router.route('/userId/:id')
	.get(getOneUser)
	.delete(deleteUser)



module.exports = router;
