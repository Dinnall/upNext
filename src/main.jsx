import React from 'react';
import { render } from 'react-dom';
import MentorPage from '../front/becomeMentor'
import { Router, Route, browserHistory, hashHistory, Link, IndexRoute } from 'react-router';

// CSS files 
import './style/App.css';

<<<<<<< HEAD
=======
 
>>>>>>> e81494d725625a3108304a0497025e34e7dd2beb
// Place All Componets here
import MainPage from '../front/homePage';

const Main = React.createClass({
  render(){
    return(
      <div>
      hello
       {this.props.children}
      </div>
      )
  }
})

render(
  <Router history={browserHistory}>
    <Route path='/' component={MainPage}>
      <IndexRoute component={MainPage} />
      <Route path='/becomeMentor' component={MentorPage} />
    </Route>
  </Router>, 
  document.getElementById('main')
)



