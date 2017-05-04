import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import ProfileInfo from './profile-info.jsx';
import UserProjects from './OneuserProjects.jsx';

const UserProfile = React.createClass({
   render: function() {
     return (
      <div>
       <div>
         <ProfileInfo id={this.props.params.id}/>
       </div>
       <div>
         <UserProjects />
       </div>
     </div>
     )
   }
})

export default UserProfile;
