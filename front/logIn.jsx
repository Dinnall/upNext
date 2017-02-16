import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Link, Router, Route, browserHistory, hashHistory } from 'react-router';

import '../src/style/nya.css';
import allProjects from '../front/allProjects.jsx';
import FooterPage from './footer.jsx';

const LogInPage = React.createClass ({
  handleSubmit() {
    event.preventDefault()
    var email = this.email
    var password = this.password
    console.log(email)
    console.log(password)
    {
      $.ajax({
        url: '/api/user/userId/3',
        type: "GET"
      })
      .success ((data) => {
        console.log('it worked', data);
      })
      // .catch((error) => {
      //   console.log(error)
      // })
    }
    
  },
  render: function(){
    return (
      <div className='flexContainerLIP'>
          <h1 className='titleLIP'>Log In</h1>
          <form className='formLIP' onSubmit={this.handleSubmit}>
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
                  <button type='submit'>Log In</button>
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