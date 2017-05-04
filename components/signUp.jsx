import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

const CreateUser = React.createClass({
  getInitialState(){
    return {
      user: null
    }
  },
  handleSubmit(event) {
    event.preventDefault();
    $.ajax({
      url: 'api/user/register',
      type: 'POST',
      data: {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        bio: this.bio.value,
        email: this.email.value,
        linkedin: this.linkedin.value,
        imageUrl: this.imageUrl.value,
        password: this.password.value,
        location: this.location.value,
        position: this.position.value
      }
    })
    .done((data) => {
      console.log(data)
      this.setState({user: data})
      // this.props.router.push('/profile' + data.id + '?login' + data.id)
    }).catch((error) => {
      console.log(error)
    })
  },
  render: function() {
    return (
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


                   <input type="text" placeholder="First Name" ref={(input) => {
                       this.firstName = input;
                   }} required/>

                   <input type="text" placeholder="Last Name" ref={(input) => {
                       this.lastName = input;
                   }} required/>

                   <input type="text" placeholder="Short Bio" ref={(input) => {
                       this.bio = input;
                   }}/>

                   <input type="text" placeholder="email" ref={(input) => {
                       this.email = input;
                   }} required/>

                   <input type="text" placeholder="location" ref={(input) => {
                       this.location = input;
                   }}/>

                   <input type="text" placeholder="Position" ref={(input) => {
                       this.position = input;
                   }}/>

                   <input type="text" placeholder="LinkedIn Url" required ref={(input) => {
                       this.linkedin = input;
                   }}/>

                   <input type="text" placeholder="Profile photo url" required ref={(input) => {
                       this.imageUrl = input;
                   }}/>

                   <input type="password" placeholder="password" required ref={(input) => {
                       this.password = input;
                   }} required/>
                    <button type="submit">Sign Up</button>

                      <p class="message">Registered? <Link to="/login">Login to your account</Link></p>
                   </form>
               </div>
       </div>
    )
  }
})

export default CreateUser
