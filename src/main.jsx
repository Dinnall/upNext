import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory, Link, IndexRoute } from 'react-router';

const Main = React.createClass({
  render(){
    return(
      <div>
        <h1>Hello</h1>
        <nav>
          <Link to="page1">Page1</Link>
          <Link to="page2">Page2</Link>
        </nav>
        {this.props.children}
      </div>
      )
  }
})

const Page1 = React.createClass ({
  getInitialState(){
    return({counter: 0})
  },
  handleChange(e){
    this.setState({counter: this.state.counter+1})
  },
  render(){
    return(
      <div>
        <h2> Page 1</h2>
        <h3>{this.state.counter}</h3>
        <button onClick={this.handleChange}>
        Increment counter</button>
      </div>
      )
  }
})

const Page2 =React.createClass({
  getInitialState: function(){
    return {
      text: '',
    }
  },

  handleChange: function(e){
   this.setState({text: e.target.value})
  },
  render: function(){
    return(
        <div>
        <h2>Page 2</h2>
         <input onChange={handleChange}></input>
        </div>
        )
  }
})
      

render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Page1} />
      <Route path='page1' component={Page1} />
      <Route path='page2' component={Page2} />
    </Route>
  </Router>, 
  document.getElementById('main')
)



