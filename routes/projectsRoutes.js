const router = require('express').Router();

// Require in the models you will need to build out your routes;
const User = require('../models').User;
const Projects = require('../models').Projects;
const Picture = require('../models').Picture;


const allProjects=(req, res) => {
	Project.findAll()
	.then((project) => {
		res.send(project)
	})
	.catch((err)=> console.log(err))
}
  
const createProject=(req, res) => {
	Project.create(req.body)
	.then((project)=> {
		console.log(project)
		res.send(project)
	})
	.catch((err)=> console.log(err))
}

const getOneProject=(req, res) => {
	Project.findById(req.params.id, 
		{ include: [ User ]
	})
	.then((project)=> {
		res.send(project)
	})
	.catch((err)=> console.log(err))
}

const deleteProject =(req, res)=> {
	Project.findById(req.params.id)
	.then((project)=> {
		Project.destroy()
	})
	.then(()=> {
		res.send('Project has been deleted.')
	})
	.catch((err)=> console.log(err))
}

router.route('/')
	.get(allProjects)
	.post(createProject)

router.route('/:id')
	.get(getOneProject)
	.delete(deleteProject)


module.exports=router;