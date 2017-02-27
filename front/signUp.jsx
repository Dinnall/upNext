import React from 'react';
import {render} from 'react-dom';
import {
    IndexRoute,
    Link,
    Router,
    Route,
    browserHistory,
    hashHistory
} from 'react-router';
import $ from 'jquery';

import '../src/style/nya.css';

import FooterPage from './footer.jsx';

const SignUpPage = React.createClass({
    getInitialState() {
        return {user: [null]}
    },
    handleSubmit(event) {
        event.preventDefault();
        {
            $.ajax({
                url: '/api/user',
                type: "POST",
                data: {
                    firstName: this.firstName.value,
                    lastName: this.lastName.value,
                    bio: this.bio.value,
                    email: this.email.value,
                    linkedin: this.linkedin.value,
                    imageUrl: this.imageUrl.value,
                    password: this.password.value
                }
            }).done((data) => {
                console.log(data)
                this.setState({user: data})
                this.props.router.push('/profile/' + data.id + '?login=' + data.id)
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    render: function() {
        return (
            <div className='flexContainerSUP'>
                {/* <h1>Sign up</h1> */}
                <div className='upnext-form'>
                    <div>

                        <form onSubmit={this.handleSubmit}>
                            {/* <h1 className='titleSUP'>Get Started</h1> */}
                            <span>First Name</span>
                            <input id="f1" type="text" ref={(input) => {
                                this.firstName = input;
                            }} required/>
                            <span>Last Name</span>
                            <input id="f2" type="text" ref={(input) => {
                                this.lastName = input;
                            }} required/>
                            <span>Bio</span>
                            <input id="f3" type="text" ref={(input) => {
                                this.bio = input;
                            }} required/>
                            <span>Your email</span>
                            <input id="f4" type="text" ref={(input) => {
                                this.email = input;
                            }} required/>
                            <span>LinkedIn</span>
                            <input id="f5" type="text" required ref={(input) => {
                                this.linkedin = input;
                            }} required/>
                            <span>Image url</span>
                            <input id="f6" type="text" required ref={(input) => {
                                this.imageUrl = input;
                            }} required/>
                            <span>Password</span>
                            <input id="f7" type="password" required ref={(input) => {
                                this.password = input;
                            }} required/>

                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
})

export default SignUpPage;
