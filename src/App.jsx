import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Link, Router, browserHistory, Route, hashHistory } from 'react-router';


import Nav from '../components/navBar.jsx';
import LoginPage from '../components/logIn.jsx';
import UserProfile from '../components/profile_page.jsx';
import HomePage from '../components/home_page.jsx';
import CreateUser from '../components/signUp.jsx';
import UploadProject from '../components/project_upload';
import AllProjects from '../components/all-projects';
import Logout from '../components/logout';
import UserProjects from '../components/OneuserProjects';
import ProjectPage from '../components/project_page.jsx';


// import '../css/reset.css';
import '../css/Nav_styles.css';
import '../css/Profile_page_styles.css';
import '../css/project-styles.css';
import '../css/home-page-styles.css';
import '../css/Project-page-styles.css';
import '../css/login-form.css';
import '../css/app.css';



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
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage}/>
      <Route path='/profile_page/:id' component={UserProfile}/>
      <Route path='/profile_page' component={UserProfile}/>
      <Route path='/logIn' component={LoginPage}/>
      <Route path='/signUp' component={CreateUser}/>
      <Route path='/project_upload' component={UploadProject}/>
      <Route path='/all-projects' component={AllProjects}/>
      <Route path='/logout' component={Logout}/>
      <Route path='/projects/:id' component={UserProjects}/>
      <Route path='/project_page/:id' component={ProjectPage}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
