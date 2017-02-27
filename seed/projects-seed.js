const Sequelize = require('../models').Sequelize;
const sequelize = require('../models').sequelize;
const Projects = require('../models').Projects;

//Projects.sync will create the Projects table
Projects.sync({force: true})
//add the following four Projects to the database:
.then(() => Projects.bulkCreate([
	{
	  title: 'Gara Clothing',
	  description: `Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
			Proin eget tortor risus. Proin eget tortor risus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.
			Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt.

			Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Curabitur non nulla
			sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
			Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat.
			Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in,
				elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa,
				convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.

				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.
				Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
	  firstName: 'Michael',
	  gitRepo: 'https://github.com/VctrySam/Tinder',
	  url: 'https://github.com/VctrySam/Tinder',
	  videoUrl: 'https://www.youtube.com/watch?v=FTGa8Tjwfi8',
	  pictureUrl: 'https://d13yacurqjgara.cloudfront.net/users/124059/screenshots/1969732/shot.gif',
	  projectId: 1,
	  UserId: 2
	},
	{
	  title: "Monument Decor",
	  description: `Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
			Proin eget tortor risus. Proin eget tortor risus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.
			Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt.

			Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Curabitur non nulla
			sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
			Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat.
			Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in,
				elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa,
				convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.

				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.
				Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
	  firstName: 'Michael',
	  gitRepo: 'https://github.com/VctrySam/Tinder',
	  url: 'https://github.com/r-park/soundcloud-redux',
	  videoUrl: 'https://www.youtube.com/watch?v=lzsN34mm2OI',
	  pictureUrl: 'https://d13yacurqjgara.cloudfront.net/users/96387/screenshots/1795586/dribbble-7_1x.png',
	  projectId: 2,
	  UserId: 1
	},
	{
	  title: 'Perfect Pancake',
	  description: `Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
			Proin eget tortor risus. Proin eget tortor risus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.
			Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt.

			Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Curabitur non nulla
			sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
			Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat.
			Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in,
				elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa,
				convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.

				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.
				Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'`,
	  firstName: 'Craig',
	  gitRepo: 'https://github.com/VctrySam/Tinder',
	  url: 'https://github.com/VctrySam/Tinder',
	  videoUrl: 'https://www.youtube.com/watch?v=sStf_ZbTXss',
	  pictureUrl: 'https://d13yacurqjgara.cloudfront.net/users/13307/screenshots/1554241/bakery_website_1x.jpg',
	  projectId: 3,
	  UserId: 3
	},

	{
	  title: 'Winter Escape',
	  description: `Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
			Proin eget tortor risus. Proin eget tortor risus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.
			Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt.

			Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Curabitur non nulla
			sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
			Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat.
			Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in,
				elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa,
				convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.

				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.
				Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
	  firstName: 'Drake',
	  gitRepo: 'https://github.com/VctrySam/Tinder',
	  url: 'https://github.com/chvin/react-tetris',
	  videoUrl: 'https://www.youtube.com/watch?v=zeQqHEAC6G8',
	  pictureUrl: 'https://d13yacurqjgara.cloudfront.net/users/1051893/screenshots/3102519/winter.gif',
	  projectId: 4,
	  UserId: 1
	},
	{
	  title: "Knowledge Passion",
	  description: `Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
			Proin eget tortor risus. Proin eget tortor risus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.
			Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt.

			Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Curabitur non nulla
			sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
			Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat.
			Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in,
				elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa,
				convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.

				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.
				Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
	  firstName: 'Nya',
	  gitRepo: 'https://github.com/VctrySam/Tinder',
	  url: [''],
	  videoUrl: 'https://vimeo.com/139013372',
	  pictureUrl: 'https://d13yacurqjgara.cloudfront.net/users/13307/screenshots/3272390/web_site_design_hbk_1x.jpg',
	  projectId: 5,
	  UserId: 2
	},
	{
	  title: "Explore",
	  description: `Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
			Proin eget tortor risus. Proin eget tortor risus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.
			Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt.

			Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Curabitur non nulla
			sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
			Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat.
			Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in,
				elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa,
				convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.

				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.
				Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
	  firstName: 'Pikachu',
	  gitRepo: 'https://github.com/VctrySam/Tinder',
	  url: [''],
	  videoUrl: 'https://vimeo.com/139013372',
	  pictureUrl: 'https://d13yacurqjgara.cloudfront.net/users/14268/screenshots/3275340/northface.gif',
	  projectId: 5,
	  UserId: 3
	},
	{
	  title: "Enchance Trails",
	  description: `Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
			Proin eget tortor risus. Proin eget tortor risus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.
			Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt.

			Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Curabitur non nulla
			sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
			Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat.
			Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in,
				elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa,
				convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.

				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.
				Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
	  firstName: 'Melanie',
	  gitRepo: 'https://github.com/VctrySam/Tinder',
	  url: [''],
	  videoUrl: 'https://vimeo.com/139013372',
	  pictureUrl: 'https://d13yacurqjgara.cloudfront.net/users/688456/screenshots/1999848/dirtdays_main_1x.jpg',
	  projectId: 5,
	  UserId: 1
	},
	{
	  title: "Quicky Link",
	  description: `Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
			Proin eget tortor risus. Proin eget tortor risus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.
			Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt.

			Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Curabitur non nulla
			sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
			Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat.
			Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in,
				elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa,
				convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.

				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.
				Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
	  firstName: 'Olga',
	  gitRepo: 'https://github.com/VctrySam/Tinder',
	  url: [''],
	  videoUrl: 'https://vimeo.com/139013372',
	  pictureUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/72ef4c45978717.5879266096561.png',
	  projectId: 5,
	  UserId: 2
	},
	{
	  title: "LookBook for the Future",
	  description: `Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
			Proin eget tortor risus. Proin eget tortor risus. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.
			Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt.

			Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Curabitur non nulla
			sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
			Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat.
			Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in,
				elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa,
				convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.

				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.
				Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
	  firstName: 'Elle',
	  gitRepo: 'https://github.com/VctrySam/Tinder',
	  url: [''],
	  videoUrl: 'https://vimeo.com/139013372',
	  pictureUrl: 'https://d13yacurqjgara.cloudfront.net/users/144905/screenshots/2047524/v5.0-website-redesign_1x.png',
	  projectId: 5,
	  UserId: 3
	},
]))

.catch((err) => console.log(err));
