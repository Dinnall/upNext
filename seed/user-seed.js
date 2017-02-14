const Sequelize = require('../models').Sequelize;
const sequelize = require('../models').sequelize;
const User = require('../models').User;

User.sync({force: true})
.then(() => User.bulkCreate([
  
  {firstName: 'Michael', lastName:'Dinnall', email:'michael@gmail.com', password:'upnext'},
  {firstName: 'Dee', lastName:'Sterling', email:'dee@gmail.com', password:'upnext'},
  {firstName: 'Nya', lastName:'Gatkuoth', email:'nya@gmail.com', password:'upnext'},
  {firstName: 'Craig', lastName:'Dejean', email:'craig@gmail.com', password:'upnext'},

]))

.catch((err) => console.log(err));  