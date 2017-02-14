import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Link, Router, Route, browserHistory, hashHistory } from 'react-router';

import '../src/style/nya.css';
import allProjects from '../front/allProjects.jsx';
import FooterPage from './footer.jsx';

const LogInPage = React.createClass ({
  getInitialState() {
    return {}
  },
  handleSubmit() {
    event.preventDefault();
    {
      $.ajax({
        url: '/api/user',
        type: "POST",
        data: {
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
  },
  render: function(){
    return (
      <div className='flexContainerLIP'>
          <h1 className='titleLIP'>Log In</h1>
          <form className='formLIP'onSubmit={this.handleSubmit}>
            <table>
            <tbody>
              <tr>
                <td>
                  <input type="text" size="30" placeholder="Email" ref={(input) => {this.email = input;}} required />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" size="30" placeholder="Password" ref={(input) => {this.password = input;}} required />
                </td>
              </tr>
              <tr>
                <td>
                  <button>Log In</button>
                </td>
              </tr>
            </tbody>
            </table>
          </form>
      </div>
    )
  }
})

export default LogInPage;