import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';

// CSS files 
import '../src/style/App.css';
import '../src/style/nya.css';
import '../src/style/dee.css';
import '../src/style/craig.css';

// Place All Componets here
import SignUpPage from '../front/signUp.jsx';
import LogInPage from '../front/logIn.jsx';
import allListings from '../front/allVideos.jsx';
import allProjects from '../front/allProjects.jsx';
import FooterPage from '../front/footer.jsx';
import MainPage from '../front/homePage.jsx';
import MentorPage from '../front/becomeMentor.jsx';

var App = React.createClass({
  render() {
    return (
      <div>
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
        <Route path='/allProjects' component={allProjects} />
        <Route path='/allvideos' component={allListings} />
    </Route>
  </Router>, 
  document.getElementById('root')
);