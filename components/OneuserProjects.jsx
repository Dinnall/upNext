import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import ProjectPage from './project_page.jsx';

const UserProjects = React.createClass({
  getInitialState() {
    return {
      user: null
    }
  },
  componentDidMount() {
    $.ajax({
      url: '/api/user/private',
      type: 'GET'
    })
    .done((data) => {
      this.setState({ user: data })
      console.log('user', this.state.user)
    })
  },
  render: function() {
    console.log('User', this.state.user)
    return(
      <div>
        <section className="projects-section">
          <div className="projects-inner-wrapper">
            { this.state.user === null ? 'loading.....' : this.state.user.Projects.map(function(val, idx) {
              return(
                <div key={idx} className="project-card-wrapper">
                  <div className="project-title">
                    <Link to={"/project_page/" + val.id}><p>{val.title}</p></Link>
                  </div>
                  <div className="project-image">
                    <img src={val.pictureUrl}/>
                  </div>

                </div>
              )
            })}
          </div>
        </section>
      </div>
    )
  }
})

export default UserProjects;
