const db = require('./models');

db.sequelize.sync({ force: true }).then(function() {
    console.log('sync')
});
