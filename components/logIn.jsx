import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';


const LoginPage = React.createClass({
  getInitialState() {
    return { user: null }
  },
  handleSubmit(event) {
    event.preventDefault();
    {
      $.ajax({
        url: '/api/user/login',
        type: 'POST',
        data: {
          email: this.email.value,
          password: this.password.value
        }
      }).done((data) => {
        this.setState({ user: data })
        console.log(data)
      }).catch((error) => {
        console.log(error)
      })
    }
    console.log(this.email.value)
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

          <input type="text" placeholder="email" ref={(input) => {
            this.email = input;
          }} required/>


          <input type="password" placeholder="password" ref={(input) => {
            this.password = input;
          }} required/>

          <button type="submit">Login</button>

          <p class="message">Not registered? <Link to="/signUp">Create an account</Link></p>
        </form>
      </div>
    </div>
    )
  }
})

export default LoginPage;
