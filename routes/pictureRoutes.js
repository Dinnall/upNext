const router = require('express').Router();

// Require in the models you will need to build out your routes;
const User = require('../models').User;
const Video = require('../models').Video;
const Picture = require('../models').Picture;


const allPictures =(req, res) => {
	Picture.findAll()
	.then((picture) => {
		res.send(picture)
	})
	.catch((err)=> console.log(err))
}
 
const createPicture=(req, res) => {
	Picture.create(req.body)
	.then((picture)=> {
		console.log(picture)
		res.send(picture)
	})
	.catch((err)=> console.log(err))
}

const getOnePicture=(req, res) => {
	Picture.findById(req.params.id, 
		{ include: [ User ]
	})
	.then((picture)=> {
		res.send(picture)
	})
	.catch((err)=> console.log(err))
}




const deletePicture =(req, res)=> {
	Picture.findById(req.params.id)
	.then((Picture)=> {
		Picture.destroy()
	})
	.then(()=> {
		res.send('Picture has been deleted.')
	})
	.catch((err)=> console.log(err))
}



router.route('/')
	.get(allPictures)
	.post(createPicture)

router.route('/:id')
	.get(getOnePicture)
	.delete(deletePicture)


module.exports=router;