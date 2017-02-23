import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';

import '../src/style/App.css';
// import '../src/style/nya.css';
// import '../src/style/dee.css';
import '../src/style/craig.css';
import Nav from '../front/navBar.jsx'

// Place All Componets here
import SignUpPage from '../front/signUp.jsx';
import LogInPage from '../front/logIn.jsx';
import FooterPage from '../front/footer.jsx';
import MainPage from '../front/homePage.jsx';
import MentorPage from '../front/becomeMentor.jsx';
import allProjects from '../front/allProjects.jsx';
import ProfilePage from '../front/profilePage.jsx';
import UploadProject from '../front/uploadProject.jsx';



var App = React.createClass({
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={MainPage} />
        <Route path='/signup' component={SignUpPage} />
        <Route path='/login' component={LogInPage} />
        <Route path='/upload' component={UploadProject} />
        <Route path='/allProjects' component={allProjects} />
        <Route path='/profile/:id' component={ProfilePage} />
    </Route>
  </Router>,
  document.getElementById('root')
);
