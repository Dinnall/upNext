import React from 'react';
import { render } from 'react-dom';
import MentorPage from '../front/becomeMentor'
import { Router, Route, browserHistory, hashHistory, Link, IndexRoute } from 'react-router';

// CSS files 
import './style/App.css';

// Place All Componets here
import MainPage from '../front/homePage';

const Main = React.createClass({
  render(){
    return(
      <div>
       {this.props.children}
      </div>
      )
  }
})

render(
  <Router history={browserHistory}>
    <Route path='/' component={MainPage}>
      <IndexRoute component={Home} />
      <Route path='/becomeMentor' component={MentorPage} />
    </Route>
  </Router>, 
  document.getElementById('root')
)



