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
          email: this.email.value,
          password: this.password.value
        }
      })
      .done((data) => {
        console.log("Received User Data", data);
        browserHistory.push('/allprojects')
      })
      .catch((error) => {
        console.log(error)
      })
    }
    console.log(this.firstName.value)
    console.log(this.lastName.value)
    console.log(this.email.value)
    console.log(this.password.value)
  },
  render: function(){
    return (
      <div className='flexContainerSUP'> 
        <div className='leftSUP'>
          <h2>Showcase Your Projects!</h2>
          <h3>Discover Up & Coming Talent <br/> in the Tech Industry</h3>
          <h3>Find Mentors to Help <br/> Develop Your Skills</h3>
        </div>
        <div className='rightSUP'>
          <div>
            <h1 className='titleSUP'>Get Started!</h1>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="First Name" ref={(input) => {this.firstName = input;}} required />
              <input type="text" placeholder="Last Name" ref={(input) => {this.lastName = input;}} required />
              <br/>
              <input type="text" placeholder="Email" ref={(input) => {this.email = input;}} required />
              <input type="text" placeholder="Password" required ref={(input) => {this.password = input;}} />
              <br/>
              <button className='SUPbutton' type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
})

export default SignUpPage;