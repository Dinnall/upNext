import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';
import Nav from './navBar.jsx';


const allProjects = React.createClass({
  getInitialState(){
    return {project: []}
  },
  componentDidMount(){
     {
      $.ajax({
        url: '/api/projects',
        type: "GET"
      })
      .done( (data) => {
        this.setState({project: data})
      })
    }
  },
  render: function() {
    return (
      <div>
           <Nav/>

           <h2 className='allProjects'>All Available Projects</h2>
          <div className='secondComp'>
            {this.state.project.length=== 0 ? "Loading..." : this.state.project.map((projects, idx)=> {
            return (
                   <Link to={"/projects/" + projects.id} key={idx}>
                <div className="projectGrid">
                  <p className="projectTitle">{projects.title}</p>
                  <img className="videoBox" src={projects.pictureUrl} />
                  <p className="gitUsername"><strong>{'By: '+ projects.gitUsername}</strong></p>
                </div>
                     </Link>
                    )
                     })}
                </div>
          </div>
    )
  }
})


export default allProjects
        // <Link to='/'><img className='page_1' src='../images/page_one.png' /></Link>