import React from 'react';
import { render } from 'react-dom';
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';

import '../src/style/nya.css';
import SignUpPage from './signUp.jsx';
import LogInPage from './logIn.jsx';
import FooterPage from './footer.jsx';


const MainPage = React.createClass({
  render: function() {
    return (
      <div>
       <img className='rectangle_4' src={require('../images/rectangle_four.png')} />
        
      </div>
    )
  }
})


export default MainPage

















        //  <nav>
        //   <ul className='ulLink'>
        //     <li className='li1'><Link to='/signup'>Sign Up</Link></li>
        //     <li className='li2'><Link to='/login'>Log In</Link></li>
        //   </ul>
        // </nav>
        // <h1 className='smarter'>A smarter way to learn</h1>
        // <div className='secondBorder'></div>
        // <div className='thirdBorder'></div>






