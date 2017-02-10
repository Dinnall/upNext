import React from 'react';
import { render } from 'react-dom';
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';
import $ from "jquery";

import '../src/style/nya.css';

import FooterPage from './footer.jsx';

const SignUpPage = React.createClass ({
  getInitialState() {
    return {}
  },
  handleSubmit(event) {
    event.preventDefault();
  },
  render: function(){
    return (
      <div className='flexContainerSUP'> 
        <div className='leftSUP'>
          <h2>Showcase Your Projects!</h2>
          <h3>Discover Up & Coming Talent <br/> in the Tech Industry</h3>
          <h4>Find Mentors to help Develop Your Skills</h4>
        </div>
        <div className='rightSUP'>
          <div>
            <form>
              <input type='text' placeholder='Username' required></input>
              <br/>
              <input type='password' placeholder='Password' required></input>
              <br/>
              <button>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
})

{/* <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6 leftSUP'>
            <h2>Showcase Your Projects!</h2>
            <h3>Discover Up & Coming Talent <br/> in the Tech Industry</h3>
            <h4>Find Mentors to help Develop Your Skills</h4>
          </div>
          <div className='col-md-6 rightSUP'>
            <h1>Get Started Today!</h1>
            <form>
              <div className='row'>
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <div className='row'>
                <input type="text" placeholder="Email" required />
                <input type="text" placeholder="Password" required />
              </div>
              <button class="btn btn-default" type="submit">Button</button>
            </form>
          </div>
        </div>
      </div>
*/}

export default SignUpPage;