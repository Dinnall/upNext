import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';

const UploadProject = React.createClass({
	getInitialState(){
		return { project: [null] }
	},
	componentDidMount(){
		 
	},
	handleSubmit(event){
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
			})
			.done((data) => {
				this.setState({project: data})
			})
			.catch((error) => {
				console.log(error);
			})
		}
	},
	render: function(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<h1>Upload Project</h1>
					<input type="text" placeholder="Title" ref={(input) => {this.title = input;}} required /> <br />
					<input type="text" placeholder="Description" ref={(input) => {this.desc = input;}} id="desc" required /> <br />
					<input type="text" placeholder="gitUsername" ref={(input) => {this.gitUsername = input;}} required /> <br />
					<input type="text" placeholder="gitRepo" ref={(input) => {this.gitRepo = input;}} required /> <br />
					<input type="url" placeholder="siteURL" ref={(input) => {this.siteURL = input;}} required /> <br />
					<input type="url" placeholder="videoURL" ref={(input) => {this.videoURL = input;}} required /> <br />
    			<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
})

export default UploadProject;