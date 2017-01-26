const Sequelize = require('../models').Sequelize;
const sequelize = require('../models').sequelize;
const User = require('../models').User;

User.sync({force: true})
.then(() => User.bulkCreate([
  {firstName: 'Lisa', lastName:'Kang', email:'boysdontcry@gmail.com', password:'havenRock',host:true},
  {firstName: 'Esmeralda', lastName:'Reyes', email:'relativity@harvard.edu', password:'havenRock Gravity',host:false},
  {firstName: 'Chris', lastName:'Link', email:'hope@columbia.edu', password:'havenRock',host:true},
  {firstName: 'Luis', lastName:'Carbajal', email:'luis@gmail.com', password:'havenRock',host:false},
  {firstName: 'Michael', lastName:'Dinnall', email:'hoorah@gmail.com', password:'havenRock',host:true},
]))

.catch((err) => console.log(err));