import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory, Link, IndexRoute } from 'react-router';

// CSS files 
import './style/App.css';


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
    </Route>
  </Router>, 
  document.getElementById('main')
)



