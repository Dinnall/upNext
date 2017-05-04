import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import ReactPlayer from 'react-player';

const ProjectPage = React.createClass({
  getInitialState() {
    return { projectDetails: null }
  },
  componentDidMount() {
    const id = this.props.params.id
    console.log(id);
    $.ajax({
      url: '/api/projects/' + id,
      type: 'GET'
    })
    .done((data) => {
      this.setState({
        projectDetails: data
      })
      console.log(this.state.projectDetails)
    })
  },
  render: function() {
       if(this.state.projectDetails) {
         let project = this.state.projectDetails;
         console.log(project)
         return(
          <div>
           <div className="project-info">
             <div className="project-photo-wrapper">
               <img src={this.state.projectDetails.pictureUrl} alt="pic" />
             </div>
             <div className="name-wrapper">
               <h1>{this.state.projectDetails.title}</h1>
               <p>By:{this.state.projectDetails.name}</p>
               <p><a href={this.state.projectDetails.gitRepo} target="_blank">{this.state.projectDetails.gitRepo}</a></p>
             </div>
           </div>
           <div className="video-area-wrapper">
             <ReactPlayer url={this.state.projectDetails.videoUrl} playing/>
             <div className="descript-area"><p>Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in,
            elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa,
            convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.
            Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
           </div>
         </div>
         )
       } else {
         return (
           <div> Loading..... </div>
         )
       }
  }
})

export default ProjectPage;
