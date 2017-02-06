import React from 'react';
import { render } from 'react-dom';
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';

import '../src/style/nya.css';

const SignUpPage = React.createClass ({
  getInitialState() {
    return {}
  },
  handleSubmit(event) {
    event.preventDefault();
  },
  render: function(){
    return (
      <div className='flexContainer'>
        <div>
          <h1>Sign Up</h1>
            <form onSubmit={this.handleSubmit}>
            <table>
            <tbody>
              <tr>
                <td>
                  <input type="text" size="30" placeholder="Full Name" required/>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" size="30" placeholder="Email" required />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" size="30" placeholder="Password" required />
                </td>
              </tr>
              <tr>
                <td>
                  <button> Sign Up </button>
                </td>
              </tr>
            </tbody>
            </table>
            </form>
        </div>
      </div>
    )
  }
})

export default SignUpPage;