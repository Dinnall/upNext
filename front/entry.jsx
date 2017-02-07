import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';

import '../src/style/App.css'
import '../src/style/nya.css';
import SignUpPage from './signUp.jsx';
import LogInPage from './logIn.jsx';
import FooterPage from './footer.jsx';
import MainPage from './homePage.jsx'

var App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
        <FooterPage />
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={MainPage} />
        <Route path='/signup' component={SignUpPage} />
        <Route path='/login' component={LogInPage} />
    </Route>
  </Router>, 
  document.getElementById('root')
);




