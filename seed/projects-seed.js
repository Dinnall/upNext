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
	  url: ['https://github.com/VctrySam/Tinder'],
	  videoUrl: ['https://www.youtube.com/watch?v=FTGa8Tjwfi8'],
	  projectId: 1,
		UserId: 1
	},
	{
	  title: "SoundCloud Redux",
	  description: 'A basic SoundCloud API client built with React, Redux, and Redux Saga.',
	  gitUsername: 'r-park',
	  gitRepo: 'soundcloud-redux',
	  url: ['https://github.com/r-park/soundcloud-redux'],
	  videoUrl: ['https://soundcloud-redux.herokuapp.com/'],
	  projectId: 2,
		UserId: 1
	},
	{
	  title: 'SnapChat Using React',
	  description: 'SnapChat Swag',
	  gitUsername: 'VctrySam',
	  gitRepo: 'SnapChat',
	  url: ['https://github.com/VctrySam/Tinder'],
	  videoUrl: ['https://www.youtube.com/watch?v=sStf_ZbTXss'],
	  projectId: 3,
		UserId: 1
	},

	{
	  title: 'Tetris Using React, Redux, Immutable',
	  description: 'There are many versions of Javascript, and using React to do Tetris has become my goal.',
	  gitUsername: 'chvin',
	  gitRepo: 'react-tetris',
	  url: ['https://github.com/chvin/react-tetris'],
	  videoUrl: ['https://camo.githubusercontent.com/589fa964de9bab21690a2c5ad036553de296c866/68747470733a2f2f696d672e616c6963646e2e636f6d2f7470732f5442316b764a794f565858585862686146585858585858585858582d3332302d3535352e676966'],
	  projectId: 4,
		UserId: 2
	},
	{
	  title: "Let Loopy with nested Loops!",
	  description: 'This project looks at loops nested in loops',
	  gitUsername: 'shiffman',
	  gitRepo: '',
	  url: [''],
	  videoUrl: ['https://vimeo.com/139013372'],
	  projectId: 5,
		UserId: 3
	},
]))

.catch((err) => console.log(err));
