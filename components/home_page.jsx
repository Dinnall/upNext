import React from 'react';
import {Link} from 'react-router';
import CreateUser from './signUp.jsx';


const HomePage = React.createClass({
  getInitialState() {
    return {projects: []}
  },
  componentDidMount() {
    $.ajax({
      url: '/api/projects/six',
      type: 'GET'
    })
    .done((data) => {
      this.setState({projects: data})
        console.log(data)
    })
  },
  render: function() {
    return (
    <div>
      <div className="hero-image">
        <div className="slogan-wrapper">
           <div className="slogan"><p>Upnext is a space for creators</p></div>
           <div className="signUp-button">
             <Link className="signUp" to="/signUp">Sign up</Link>
           </div>
        </div>
      </div>

      <section className="projects-section">
        <div className="projects-inner-wrapper">
          { this.state.projects.length === 0 ? 'loading.....' : this.state.projects.map(function(val, idx) {
            return(
              <div key={idx} className="project-card-wrapper">
                <div className="project-title">
                  <Link to={"/project_page/" + val.id}><p>{val.title}</p></Link>
                </div>
                <div className="project-image">
                  <img src={val.pictureUrl}/>
                </div>
                <Link to={"/profile_page/" + val.UserId}>
                  <p className="gitHubName">{'By: ' + val.name}</p>
                </Link>
              </div>
            )
          })}
        </div>
      </section>

     <div className="slogan-2-wrapper">
       <div className="slogan-2">
         <div className="slogan-2-child-1">
           <p>Share your work,</p>
           <p>Connect with the community</p>
         </div>
         <div className="slogan-2-child-2">
           <p>UpNEXT is always seeking highly experienced individuals who
             want to give back to the community by offering their support.</p>
           <p>We are looking for mentors with a passion for sharing what they know.</p>
           <p>Students will communicate with their mentors online.</p>
           <p>If you are interested in becoming a mentor,we invite you to tell us more about yourself.</p>
         </div>
       </div>
     </div>
     <div className="bottom-slogan-wrapper">
       <div className="bottom-slogan">
         <Link to='/mentor'><p>Become a Mentor!</p></Link>
       </div>
     </div>
     <div className="bottom-banner"></div>
  </div>
    )
  }
})

export default HomePage;
