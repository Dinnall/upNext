const router = require('express').Router();
const Projects = require('../models').Projects;
const User = require('../models').User;
const models = require('../models/index');



// get all projects

function allProjects(req, res) {
  Projects.findAll({}).then(function(data) {
    res.send(data)
  }).catch(function(error) {
    console.log("Error returning all projects in database", error);
    res.sendStatus(500);
  })
}


// get six projects

function getSixProjects(req, res) {
  Projects.findAll({
    include: [User],
    limit: 6
  })
  .then(function(projects) {
    res.send(projects)
  })
  .catch(function(err) {
    res.sendStatus(500)
  })
}


// get one project

function oneProject(req, res) {
  Projects.findById(req.params.id, {
    include: [User]
  })
  .then(function(oneProject) {
    res.send(oneProject)
  })
  .catch(function(err) {
    console.log('one project', error)
  })
}



// create a project

function createProject(req, res) {
  Projects.create({
    title: req.body.title,
		description: req.body.description,
		gitRepo: req.body.gitRepo,
		url: req.body.url,
		videoUrl: req.body.videoUrl,
		pictureUrl: req.body.pictureurl,
		UserId: req.session.passport.user
  })
  .then(function(newProject) {
    res.send(newProject)
  })
  .catch(function(err) {
    console.log(err)
  })
}


router.route('/all')
.get(allProjects)

router.route('/create')
.post(createProject)

router.route('/six')
.get(getSixProjects)

router.route('/:id')
.get(oneProject)

module.exports = router;
