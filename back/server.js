pconst express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const db = require('../models');
const Sequelize = require('sequelize');
const session = require('express-session');
  


app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static('public'));


app.use("/api", require('../routes'))


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//connect database to server
db.sequelize.sync().then(function() {
	console.log("Listening on port 8080");
  app.listen(8080);
});



module.exports = app;