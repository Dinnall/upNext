const router = require('express').Router();
const User = require('../models').User;
const Projects = require('../models').Projects;
const models = require('../models/index');
const passport = require('../passport-config/passport');

// Get all users

function allUsers(req, res) {
  User.findAll({}).then(function(data) {
    res.send(data)
  })
  .catch(function(error) {
    console.log("Error returning all users in database", error);
    res.sendStatus(500);
  })
}


// Get One User

function OneUserSession(req, res) {
  User.findById(req.session.passport.user, {
    include: [Projects]
  })
  .then(function(OneUser) {
    res.send(OneUser)
  })
  .catch(function(error) {
    console.log('one user', error)
  })
}


// get one users w/o session id

function OneUser(req, res) {
  User.findById(req.params.id, {
    include: [Projects]
  })
  .then(function(OneUser) {
    res.send(OneUser)
  })
  .catch(function(error) {
    console.log('one user', error)
  })
}


// Create a user

function createUser(req, res) {
  User.create({
    firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password:req.body.password,
		imageUrl:req.body.imageUrl,
		bio: req.body.bio,
		linkedin: req.body.linkedin
  })
  .then(function(newUser) {
      passport.authenticate('local', function(err, user, info) {
        if(err) { return next(err); }
        if(!user) { res.status(401).end(); return; }
        req.logIn(user, function(err) {
          if(err) { res.status(401).end(); return; }
          res.send(JSON.stringify(user)).end();
        });
      })(req, res, next);
    })
     .catch((err) => {
       res.send(err).end();
  });
}



// log in

function login(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { res.status(401).end(); return; }
    req.logIn(user, function(err) {
      if (err) { res.status(401).end(); return; }
      res.send(JSON.stringify(user)).end();
    });
  })(req, res, next);
}

// log out

function logout(req, res) {
  console.log('<==== User logged out ===>')
  req.logout();
  req.session.destroy();
}

router.route('/')
.get(allUsers)

router.route('/register')
.post(createUser)

router.route('/login')
.post(login)

router.route('/logout')
.get(logout)

router.route('/private/:id')
.get(OneUser)

router.route('/private')
.get(OneUserSession)

module.exports = router;
