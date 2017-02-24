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
                    description: this.description.value,
                    firstName: this.firstName.value,
                    gitRepo: this.gitRepo.value,
                    url: this.url.value,
                    videoUrl: this.videoUrl.value,
                    Pictureurl: this.pictureUrl.value

                }
            }).done((data) => {
                this.setState({project: data})
                this.props.router.push('/allprojects')
            }).catch((error) => {
                console.log(error);
            })
        }
        console.log(this.title.value)
        console.log(this.description.value)
        console.log(this.firstName.value)
        console.log(this.url.value)
        console.log(this.videoUrl.value)
        console.log(this.pictureUrl.value)

    },
    render: function() {
        return (
            <div>



				<div className="add-project-wrapper">
								
                <div className="upnext-form">

                    <form onSubmit={this.handleSubmit}>


                        <form onSubmit={this.handleSubmit}>

                            <span>Insert Title of your Project here</span>
                            <input type="text" ref={(input) => {
                                this.title = input;
                            }} required/>

                            <span>
                                Description </span>
                            <textarea type="textarea" ref={(input) => {
                                this.description = input;
                            }} required/>

                            <span>
                                First Name</span>
                            <input type="text" ref={(input) => {
                                this.firstName = input;
                            }} required/>

                            <span>Name of your github repo</span>
                            <input type="text" ref={(input) => {
                                this.url = input;
                            }} required/>

                            <span>Your app URL</span>
                            <input type="url" ref={(input) => {
                                this.videoUrl = input;
                            }} required/>

                            <span>Your demo video URL</span>
                            <input type="url" ref={(input) => {
                                this.pictureUrl = input;
                            }} required/>
                            <span>Git repo</span>
                            <input type="url" ref={(input) => {
                                this.gitRepo = input;
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
