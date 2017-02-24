import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';
import Nav from './navBar.jsx';

const UploadProject = React.createClass({
    getInitialState() {
        return {project: [null]}
    },
    componentDidMount() {},
    handleSubmit(event) {
        event.preventDefault()
        {
            $.ajax({
                url: '/api/projects',
                type: "POST",
                data: {
                    title: this.title.value,
                    description: this.desc.value,
                    gitUsername: this.gitUsername.value,
                    gitRepo: this.gitRepo.value,
                    url: this.siteURL.value,
                    videoUrl: this.videoURL.value
                }
            }).done((data) => {
                this.setState({project: data})
                this.props.router.push('/allprojects');
            }).catch((error) => {
                console.log(error);
            })
        }
        console.log(this.title.value)
        console.log(this.desc.value)
        console.log(this.gitUsername.value)
        console.log(this.gitRepo.value)
        console.log(this.siteURL.value)
        console.log(this.videoURL.value)
    },
    render: function() {
        return (
            <div>

							<div className="add-project-wrapper">
								{/* <h1>Upload Project</h1> */}
                <div className="upnext-form">

                    <form onSubmit={this.handleSubmit}>


                          <span>Insert Title of your Project here</span>
                        <input  type="text" placeholder="Title" ref={(input) => {
                            this.title = input;
                        }} required/>

												 <span> Tell us about your project</span>
                        <textarea  type="textarea" placeholder="Description" ref={(input) => {
                            this.desc = input;
                        }}  required/>

                        <span> Add your github username</span>
                        <input  type="text" placeholder="gitUsername" ref={(input) => {
                            this.gitUsername = input;
                        }} required/>

												<span>Name of your github repo</span>
                        <input  type="text" placeholder="gitRepo" ref={(input) => {
                            this.gitRepo = input;
                        }} required/>

												 <span>Your app URL</span>
                        <input  type="url" placeholder="siteURL" ref={(input) => {
                            this.siteURL = input;
                        }} required/>

												 <span>Your demo video URL</span>
                        <input  type="url" placeholder="videoURL" ref={(input) => {
                            this.videoURL = input;
                        }} required/>

                         <button type="submit">Post Project</button>
                    </form>
                </div>
							</div>
            </div>

        )
    }
})

export default UploadProject;
