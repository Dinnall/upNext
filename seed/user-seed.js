const Sequelize = require('../models').Sequelize;
const sequelize = require('../models').sequelize;
const User = require('../models').User;

User.sync({force: true})
.then(() => User.bulkCreate([
  
  {firstName: 'Craig', lastName:'Dejean', email:'craig@gmail.com', password:'upnext'},
  {firstName: 'Michael', lastName:'Dinnall', email:'michael@gmail.com', password:'upnext'},
]))

.catch((err) => console.log(err));