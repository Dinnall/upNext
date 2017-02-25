const router = require('express').Router();

// Require in the models you will need to build out your routes;
const User = require('../models').User;
const Projects = require('../models').Projects;


const allProjects=(req, res) => {
	Projects.findAll()
	.then((project) => {
		res.send(project)
	})
	.catch((err)=> console.log(err))
}

// /api/projects/home
const getSixProjects = (req, res) => {
	Projects.findAll({
      include:[User],
      limit: 6
    })
	.then((projects) => {
		res.send(projects)
	})
	.catch((err) => {
		res.sendStatus(500)
	})
}

function createProject (req, res) {
	Projects.create({
		title: req.body.title,
		description: req.body.description,
		firstName: req.body.firstName,
		gitRepo: req.body.gitRepo,
		url: req.body.url,
		videoUrl: req.body.videoUrl,
		Pictureurl: req.body.pictureUrl
	})
	.then(function(project) {

		res.send(project)
	})
	.catch((err) => console.log(err))
}

const getOneProject=(req, res) => {
	Projects.findById(req.params.id,
		{ include: [ User ]
	})
	.then((project)=> {
		res.send(project)
	})
	.catch((err)=> console.log('test', err))
}

const deleteProject =(req, res)=> {
	Projects.findById(req.params.id)
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
	.post(createProject);

router.route('/home')
	.get(getSixProjects);

router.route('/:id')
	.get(getOneProject)
	.delete(deleteProject);


module.exports=router;
