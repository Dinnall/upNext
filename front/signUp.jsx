import React from 'react';
import { render } from 'react-dom';
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';
import $ from 'jquery';

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
          <h3>Find Mentors to Help <br/> Develop Your Skills</h3>
        </div>
        <div className='rightSUP'>
          <div>
            <h1 className='titleSUP'>Get Started!</h1>
            <form>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
              <br/>
              <input type="text" placeholder="Email" required />
              <input type="text" placeholder="Password" required />
              <br/>
              <button className='SUPbutton' type="submit">Sign Up</button>
            </form>
          </div>
        </div>
        <FooterPage className='flexContainerFooter' />
      </div>
    )
  }
})

export default SignUpPage;