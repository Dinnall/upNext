import React from 'react';
import {Link, withRouter} from 'react-router';
import UserProfile from './profile_page';
import Login from './logIn.jsx';
import UploadProject from './project_upload';
import AllProjects from './all-projects';
import Logout from './logout';



const Nav = React.createClass({
  getInitialState() {
    return {
      user: null
    }
  },
  render: function() {
    return (
      <div className="nav-wrapper">
        <nav className="nav-parent">
          <Link to='/'><img src="../public/images/page-1@3x.png" className="logo"/></Link>
          <li><Logout /></li>
          <li><Link to="/logIn">Log in</Link></li>
          <li><Link to="/profile_page">My Profile</Link></li>
          <li><Link to="/all-projects">All Projects</Link></li>
          <li className="add-project-wrapper">
            <Link className="add-project" to="/project_upload">+ Add Project</Link>
          </li>
        </nav>

      </div>
    )
  }
})

export default Nav;
