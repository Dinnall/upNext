const Sequelize = require('../models').Sequelize;
const sequelize = require('../models').sequelize;
const Projects = require('../models').Projects;

//Projects.sync will create the Projects table
Projects.sync({force: true})
//add the following four Projects to the database:
.then(() => Projects.bulkCreate([
	{
	  title: 'Tinder Using React',
	  description: 'Tinder Swag',
	  gitUsername: 'VctrySam',
	  gitRepo: 'Tinder',
	  url: 'https://github.com/VctrySam/Tinder',
	  videoUrl: 'https://www.youtube.com/watch?v=FTGa8Tjwfi8',
		pictureUrl: 'https://gigaom.com/wp-content/uploads/sites/1/2012/12/newlook-1.jpg',
	  projectId: 1,
		UserId: 1
	},
	{
	  title: "SoundCloud Redux",
	  description: 'A basic SoundCloud API client built with React, Redux, and Redux Saga.',
	  gitUsername: 'r-park',
	  gitRepo: 'soundcloud-redux',
	  url: 'https://github.com/r-park/soundcloud-redux',
	  videoUrl: 'https://soundcloud-redux.herokuapp.com/',
		pictureUrl: 'http://www.businessnewsdaily.com/images/i/000/010/545/i02/Facebook-homepage.PNG?1453478400',
	  projectId: 2,
		UserId: 1
	},
	{
	  title: 'SnapChat Using React',
	  description: 'SnapChat Swag',
	  gitUsername: 'VctrySam',
	  gitRepo: 'SnapChat',
	  url: 'https://github.com/VctrySam/Tinder',
	  videoUrl: 'https://www.youtube.com/watch?v=sStf_ZbTXss',
		pictureUrl: 'https://www.hotdesign.com/wp-content/uploads/linkedin-personal-profile-600x559.jpg',
	  projectId: 3,
		UserId: 1
	},

	{
	  title: 'Tetris Using React, Redux, Immutable',
	  description: 'There are many versions of Javascript, and using React to do Tetris has become my goal.',
	  gitUsername: 'chvin',
	  gitRepo: 'react-tetris',
	  url: 'https://github.com/chvin/react-tetris',
	  videoUrl: 'https://camo.githubusercontent.com/589fa964de9bab21690a2c5ad036553de296c866/68747470733a2f2f696d672e616c6963646e2e636f6d2f7470732f5442316b764a794f565858585862686146585858585858585858582d3332302d3535352e676966',
		pictureUrl: 'http://d1y9uiksrn06av.cloudfront.net/wp-content/uploads/2015/02/Embed-Instagram-Screenshot-with-cursor.jpg',
	  projectId: 4,
		UserId: 1
	},
	{
	  title: "Let Loopy with nested Loops!",
	  description: 'This project looks at loops nested in loops',
	  gitUsername: 'shiffman',
	  gitRepo: '',
	  url: [''],
	  videoUrl: 'https://vimeo.com/139013372',
		pictureUrl: 'http://www.clixmarketing.com/blog/wp-content/uploads/2015/12/Twitter-Ads-1.png',
	  projectId: 5,
		UserId: 1
	},
	{
	  title: "Let Loopy with nested Loops!",
	  description: 'This project looks at loops nested in loops',
	  gitUsername: 'shiffman',
	  gitRepo: '',
	  url: [''],
	  videoUrl: 'https://vimeo.com/139013372',
		pictureUrl: 'http://www.evoluted.net/thinktank/wp-content/uploads/2011/05/wb_dribble.jpg',
	  projectId: 5,
		UserId: 1
	},
	{
	  title: "Let Loopy with nested Loops!",
	  description: 'This project looks at loops nested in loops',
	  gitUsername: 'shiffman',
	  gitRepo: '',
	  url: [''],
	  videoUrl: 'https://vimeo.com/139013372',
		pictureUrl: 'http://www.carstockphotography.co.uk/news/behance%20jan2013/behance%20page%20tim%20wallace.jpg',
	  projectId: 5,
		UserId: 1
	},
	{
	  title: "Let Loopy with nested Loops!",
	  description: 'This project looks at loops nested in loops',
	  gitUsername: 'shiffman',
	  gitRepo: '',
	  url: [''],
	  videoUrl: 'https://vimeo.com/139013372',
		pictureUrl: 'http://www.hugpug.com/photos/sheba_layout5/myspace.jpg',
	  projectId: 5,
		UserId: 1
	},
]))

.catch((err) => console.log(err));
