import React from 'react';
import { render } from 'react-dom';
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';

import '../src/style/nya.css';

const LogInPage = React.createClass ({
  getInitialState() {
    return {}
  },
  render: function(){
    return (
      <div className='flexContainer'>
        <div>
          <h1>Log In</h1>
            <form onSubmit={this.handleSubmit}>
            <table>
            <tbody>
              <tr>
                <td>
                  <input type="text" size="30" placeholder="Email" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" size="30" placeholder="Password" />
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
      </div>
    )
  }
})

export default LogInPage;