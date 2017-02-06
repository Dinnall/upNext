const router = require('express').Router();

// Require in the models you will need to build out your routes;
const User = require('../models').User;
const Video = require('../models').Video;
const Picture = require('../models').Picture;


const allVideos=(req, res) => {
	Video.findAll()
	.then((video) => {
		res.send(video)
	})
	.catch((err)=> console.log(err))
}
 
const createVideo=(req, res) => {
	Video.create(req.body)
	.then((video)=> {
		console.log(video)
		res.send(video)
	})
	.catch((err)=> console.log(err))
}

const getOneVideo=(req, res) => {
	Video.findById(req.params.id, 
		{ include: [ User ]
	})
	.then((video)=> {
		res.send(video)
	})
	.catch((err)=> console.log(err))
}

const deleteVideo =(req, res)=> {
	Video.findById(req.params.id)
	.then((Video)=> {
		Video.destroy()
	})
	.then(()=> {
		res.send('Video has been deleted.')
	})
	.catch((err)=> console.log(err))
}

router.route('/')
	.get(allVideos)
	.post(createVideo)

router.route('/:id')
	.get(getOneVideo)
	.delete(deleteVideo)


module.exports=router;