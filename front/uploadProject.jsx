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
    handleSubmit(e) {
        e.preventDefault()
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
                    pictureurl: this.pictureUrl.value,
                    userId: this.props.location.query['user']

                }
            }).done((data) => {
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

                            <span>Insert Title of your Project here</span>
                            <input  id="f1"  type="text" ref={(input) => {
                                this.title = input;
                            }} required/>

                            <span>
                                Description
                            </span>
                            <textarea id="f11" type="textarea" ref={(input) => {
                                this.description = input;
                            }} required/>

                            <span>
                                First Name</span>
                            <input  id="f2" type="text" ref={(input) => {
                                this.firstName = input;
                            }} required/>

                            <span>Github repo</span>
                            <input  id="f3" type="text" ref={(input) => {
                                this.gitRepo = input;
                            }} required/>

                            <span>App URL</span>
                            <input  id="f4" type="url" ref={(input) => {
                                this.url = input;
                            }} required/>

                            <span>Video URL</span>
                            <input  id="f5" type="url" ref={(input) => {
                                this.videoUrl = input;
                            }} required/>
                            <span>Picture Url</span>
                            <input  id="f6" type="url" ref={(input) => {
                                this.pictureUrl = input;
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
