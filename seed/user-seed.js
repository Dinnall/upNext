const Sequelize = require('../models').Sequelize;
const sequelize = require('../models').sequelize;
const User = require('../models').User;

User.sync({force: true})
.then(() => User.bulkCreate([

  {
    firstName: 'Michael',
    lastName:'Dinnall',
    email:'michael@gmail.com',
    password:'upnext',
    imageUrl:'https://avatars2.githubusercontent.com/u/20409413?v=3&s=460'
  },
  {
    firstName: 'Dee',
    lastName:'Sterling',
    email:'dee@gmail.com',
    password:'upnext',
    imageUrl:'https://avatars0.githubusercontent.com/u/20431467?v=3&s=460'
  },
  {
    firstName: 'Nya',
    lastName:'Gatkuoth',
    email:'nya@gmail.com',
    password:'upnext',
    imageUrl:'https://avatars2.githubusercontent.com/u/20360386?v=3&s=460'
  },
  {
    firstName: 'Craig',
    lastName:'Dejean',
    email:'craig@gmail.com',
    password:'upnext',
    imageUrl:'https://avatars3.githubusercontent.com/u/12685192?v=3&s=460'
  },

]))

.catch((err) => console.log(err));
