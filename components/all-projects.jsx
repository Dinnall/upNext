import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import ProjectPage from './project_page.jsx'

const AllProjects = React.createClass({
  getInitialState() {
    return {
      projects: []
    }
  },
  componentDidMount() {
    $.ajax({
      url: '/api/projects/all',
      type: 'GET'
    })
    .done((data) => {
      this.setState({ projects: data })
      console.log(this.state.projects)
    })
  },
  render: function(){
    return (
      <div>
        <section className="projects-section">
          <div className="projects-inner-wrapper">

            {this.state.projects.length === 0 ? "Loading..." : this.state.projects.map(function(val, idx) {
            return (
                  <div key={idx} className="project-card-wrapper">
                    <div className="project-title">
                      <Link to={"/project_page/" + val.id}><p>{val.title}</p></Link>
                    </div>
                    <div className="project-image">
                      <img src={val.pictureUrl}/>
                    </div>
                  </div>
                )
              })
            }
        </div>
      </section>
    </div>
   )
  }
})

export default AllProjects;
