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

           <div className="page-descript">
           <h2 className='allProjects-headline'>All Available Projects</h2>
           </div>
           <div className='projects-section'>
               <div id="allProjects">{this.state.project.length === 0
                       ? "Loading..."
                       : this.state.project.map((projects, idx) => {
                           return (

                               <div key={idx} className="map-wrapper">
                                   <div className="descript">
                                     <Link to={"/projects/" + projects.id} key={idx}>  <p>{projects.title}</p> </Link>
                                   </div>
                                   <div className="image-area" src={projects.pictureUrl}>
                                       <img src={projects.pictureUrl}/>
                                   </div>
                                   <Link to={"/profile/" + projects.id} key={idx}>
                                       <p className="gitUsername">{'By: ' + projects.firstName}</p>
                                   </Link>
                               </div>

                           )
                       })}
               </div>
          {/* <div className='secondComp'>
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
                </div> */}
          </div>
        </div>
    )
  }
})


export default allProjects
        // <Link to='/'><img className='page_1' src='../images/page_one.png' /></Link>
