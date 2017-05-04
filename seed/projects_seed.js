const Sequelize = require('../models').Sequelize;
const Projects = require('../models').Projects;


Projects.sync({force: true})

.then(() => Projects.bulkCreate([
	{
	  title: 'Gara Clothing',
	  name: 'Michael',
	  gitRepo: 'https://github.com/VctrySam/Tinder',
	  url: 'https://github.com/VctrySam/Tinder',
	  videoUrl: 'https://www.youtube.com/watch?v=FTGa8Tjwfi8',
	  pictureUrl: 'https://d13yacurqjgara.cloudfront.net/users/124059/screenshots/1969732/shot.gif',
	  projectId: 1,
	  UserId: 1
	},
	{
	  title: "Monument Decor",
	  name: 'Michael',
	  gitRepo: 'https://github.com/VctrySam/Tinder',
	  url: 'https://github.com/r-park/soundcloud-redux',
	  videoUrl: 'https://www.youtube.com/watch?v=lzsN34mm2OI',
	  pictureUrl: 'https://d13yacurqjgara.cloudfront.net/users/96387/screenshots/1795586/dribbble-7_1x.png',
	  projectId: 2,
	  UserId: 1
	},
	{
	  title: 'Perfect Pancake',
	  name: 'Craig',
	  gitRepo: 'https://github.com/VctrySam/Tinder',
	  url: 'https://github.com/VctrySam/Tinder',
	  videoUrl: 'https://www.youtube.com/watch?v=sStf_ZbTXss',
	  pictureUrl: 'https://d13yacurqjgara.cloudfront.net/users/13307/screenshots/1554241/bakery_website_1x.jpg',
	  projectId: 3,
	  UserId: 4
	},

	{
	  title: 'Winter Escape',
	  name: 'Michael',
	  gitRepo: 'https://github.com/VctrySam/Tinder',
	  url: 'https://github.com/chvin/react-tetris',
	  videoUrl: 'https://www.youtube.com/watch?v=zeQqHEAC6G8',
	  pictureUrl: 'https://d13yacurqjgara.cloudfront.net/users/1051893/screenshots/3102519/winter.gif',
	  projectId: 4,
	  UserId: 1
	},
	{
	  title: "Knowledge Passion",
	  name: 'Darlene',
	  gitRepo: 'https://github.com/VctrySam/Tinder',
	  url: [''],
	  videoUrl: 'https://vimeo.com/139013372',
	  pictureUrl: 'https://d13yacurqjgara.cloudfront.net/users/13307/screenshots/3272390/web_site_design_hbk_1x.jpg',
	  projectId: 4,
	  UserId: 2
	},
	{
	  title: "Explore",
	  name: 'Nya',
	  gitRepo: 'https://github.com/VctrySam/Tinder',
	  url: [''],
	  videoUrl: 'https://vimeo.com/139013372',
	  pictureUrl: 'https://d13yacurqjgara.cloudfront.net/users/14268/screenshots/3275340/northface.gif',
	  projectId: 5,
	  UserId: 3
	},
	{
	  title: "Enchance Trails",
	  name: 'Craig',
	  gitRepo: 'https://github.com/VctrySam/Tinder',
	  url: [''],
	  videoUrl: 'https://vimeo.com/139013372',
	  pictureUrl: 'https://d13yacurqjgara.cloudfront.net/users/688456/screenshots/1999848/dirtdays_main_1x.jpg',
	  projectId: 6,
	  UserId: 4
	},
	{
	  title: "Quicky Link",
	  name: 'Craig',
	  gitRepo: 'https://github.com/VctrySam/Tinder',
	  url: [''],
	  videoUrl: 'https://vimeo.com/139013372',
	  pictureUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/72ef4c45978717.5879266096561.png',
	  projectId: 7,
	  UserId: 4
	},
	{
	  title: "LookBook for the Future",
	  name: 'Michael',
	  gitRepo: 'https://github.com/VctrySam/Tinder',
	  url: [''],
	  videoUrl: 'https://vimeo.com/139013372',
	  pictureUrl: 'https://d13yacurqjgara.cloudfront.net/users/144905/screenshots/2047524/v5.0-website-redesign_1x.png',
	  projectId: 8,
	  UserId: 1
	},
]))

.catch((err) => console.log(err));
