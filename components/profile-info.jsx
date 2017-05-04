import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';


const ProfileInfo = React.createClass({
   getInitialState() {
     return {
       user: null,
     }
   },
   componentDidMount() {
     const url = this.props.id ? '/api/user/private/' + this.props.id : '/api/user/private/'
     $.ajax ({
       url: url,
       type: 'GET'
     })
     .done((data) => {
       this.setState({user: data})
     })
   },
   render: function() {
     console.log('user', this.state.user)
     return (
       <div className="profile-info-wrapper">
        { this.state.user === null ? 'Loading...':
        <div className="profile-info">

           <div className="profile-photo-wrapper">
             <img src={this.state.user.imageUrl}/>
           </div>

           <div>
             <h1 className="name">{this.state.user.firstName} {this.state.user.lastName}</h1>
             <p className="location">{this.state.user.location}</p>
             <p className="position">{this.state.user.position}</p>
           </div>

           <ul className="links">
             <li>
               <img src="../public/images/icn-twitter@3x.png" className="icn-twitter" height="35px" width="35px"></img>
             </li>
             <li>
               <img src="../public/images/icn-github@2x.png" className="icn-github" height="35px" width="35px"></img>
             </li>
             <li>
               <Link to={this.state.user.linkedin} target="_blank"><img src="../public/images/icn-linkedin@3x.png" className="icn-linkedin" height="35px" width="35px"></img></Link>
             </li>
             <li>
               <img src="../public/images/icn-website@3x.png" className="icn-website" height="35px" width="35px"></img>
             </li>
           </ul>

           <div className="action-buttons-wrapper">
               <div className="action-buttons">
                 Mentor Me
               </div>
               <div className="action-buttons">
                 Hire Me
               </div>
           </div>
       </div>
     }
</div>
     )
   }
})

export default ProfileInfo;
