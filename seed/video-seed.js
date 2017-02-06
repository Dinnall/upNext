const Sequelize = require('../models').Sequelize;
const sequelize = require('../models').sequelize;
const Video = require('../models').Video;

//Video.sync will create the Video table
Video.sync({force: true})
//add the following four Videos to the database:
.then(() => Video.bulkCreate([
	{
	  title: 'Making a chat room using meteor',
	  description: 'This is a simple chat room tutorial for Meteor JS.',
	  url: ['https://vimeo.com/40300075'],
	  videoId: 1
	},
 
	{
	  title: "Get more familar with CSS animation events",
	  description: 'A step-by-step tutorial on listening for CSS animation events with JavaScript and the additional details you can get from them',
	  url: ['https://vimeo.com/86821694'],
	  videoId: 2
	},
	{
	  title: "Small intro to JSON",
	  description: 'This video will introduce you to the very basics of JSON, what it is and how to use it',
	  url: ['https://vimeo.com/8463462'],
	  videoId: 4
	},	
	{
	  title: "Let Loopy with nested Loops!",
	  description: 'This video looks at loops nested in loops',
	  url: ['https://vimeo.com/139013372'],
	  videoId: 3
	},		
]))

.catch((err) => console.log(err));





