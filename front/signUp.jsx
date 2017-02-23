import React from 'react';
import { render } from 'react-dom';
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';
import $ from 'jquery';

import '../src/style/nya.css';

import FooterPage from './footer.jsx';

const SignUpPage = React.createClass ({
  getInitialState() {
    return { user: [null] }
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
      })
      .done((data) => {
        this.setState({user: data})
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  render: function(){
    return (
      <div className='flexContainerSUP'> 
        <div className='leftSUP'>
          <h1>Showcase Your Projects!</h1>
          <h2>Discover Up & Coming Talent <br/> in the Tech Industry</h2>
          <h3>Find Mentors to Help <br/> Develop Your Skills</h3>
        </div>
        <div className='rightSUP'>
          <div>
          <fieldset className='SUPbutton'>
            <form onSubmit={this.handleSubmit}>
            <h1 className='titleSUP'>Get Started</h1>
              <input type="text" placeholder="First Name" ref={(input) => {this.firstName = input;}} required />
              <input type="text" placeholder="Last Name" ref={(input) => {this.lastName = input;}} required />
              <br/>
              <input type="text" placeholder="Tell Us About Yourself" ref={(input) => {this.bio = input;}} required />
              <input type="text" placeholder="Email" ref={(input) => {this.email = input;}} required />
              <br/>
              <input type="text" placeholder="Linked In" required ref={(input) => {this.linkedin = input;}} required />
              <input type="text" placeholder="Password" required ref={(input) => {this.password = input;}} />
              <br/>
              <input type="submit" value='Sign Up'className='SUPbutton' />
            </form>
          </fieldset>
          </div>
        </div>
      </div>
    )
  }
})

export default SignUpPage;