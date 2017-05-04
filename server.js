const express = require('express');
const Session = require('express-session');
const pgSession = require('connect-pg-simple')(Session);
const passport = require('./passport-config/passport');
const path = require('path');
const bodyparser = require('body-parser');
const db = require('./models');


const app = express();
const router = require('./routes/index.js')
const env    = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];

app.use(bodyparser.urlencoded({ extended: false }));

// Session //
app.use(Session({
  store: new pgSession({
    conString: 'pg://' + config.username + ':' + config.password + '@' + config.host + '/' + config.database,
    db: db.sequelize,
      table: 'Session'
  }),
  secret: 'CAT_PLAYING_PIANO',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
}));


app.use(passport.initialize());
app.use(passport.session());


app.use(express.static('./public'));
app.use('/api',router)


app.get('/*', (req, res) =>{
console.log('USER ======>>>>>>', req.user);
  console.log('isAuthenticated ======>>>>>>', req.isAuthenticated());
  res.sendFile(path.join(__dirname, './public/index.html'))
})





app.listen(8080, function() {
  console.log('server started on port 8080')
});
