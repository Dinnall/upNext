import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';


const UploadProject = React.createClass({
  getInitialState() {
    return {
      project: null
    }
  },
  handleSubmit(event) {
    $.ajax({
      url: "/api/projects/create",
      type: 'POST',
      data: {
        title: this.title.value,
        description: this.description.value,
        name: this.name.value,
        gitRepo: this.gitRepo.value,
        url: this.url.value,
        videoUrl: this.videoUrl.value,
        pictureurl: this.pictureUrl.value,
        userId: this.props.location.query['user']
      }
    })
    .done((data) => {
      this.props.router.push('/profile_page')
    }).catch((error)=> {
      console.log(error)
    })
    console.log(this.title.value)
  },
  render: function() {
    return(
      <div>
        <div className="header-container">
          <div className="header">
            <h1>upNext</h1>
            <span>Inspired by creators</span>
          </div>
        </div>

        <div className="login-container">
          <div class="thumbnail"><img src="../public/images/page-1@2x.png"/></div>

            <form className="login-form" onSubmit={this.handleSubmit}>

                    <input placeholder="title" type="text" ref={(input) => {
                        this.title = input;
                    }} required/>

                    <textarea type="textarea" ref={(input) => {
                        this.description = input;
                    }} required/>

                    <input placeholder="your name" type="text" ref={(input) => {
                        this.name = input;
                    }} required/>

                    <input placeholder="github link" type="text" ref={(input) => {
                        this.gitRepo = input;
                    }} required/>

                    <input placeholder="link to app" type="url" ref={(input) => {
                        this.url = input;
                    }} required/>

                    <input placeholder="link to video" type="url" ref={(input) => {
                        this.videoUrl = input;
                    }} required/>

                    <input placeholder="link to photo" type="url" ref={(input) => {
                        this.pictureUrl = input;
                    }} required/>

                    <button type="submit">Post Project</button>
                    <p class="message">Need inspiration? <Link to="/all-projects">Check out these projects!</Link></p>
                </form>

        </div>
     </div>
    )
  }
})

export default UploadProject;
