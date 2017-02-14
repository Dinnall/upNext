import React from 'react';
import { render } from 'react-dom';
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';
import $ from "jquery";

import '../src/style/nya.css';

const HeaderPage = React.createClass ({
getInitialState() {
    return {}
  },
  render: function(){
    return (
      <nav className="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
              <Link class="navbar-brand" to="#">Brand</Link>
          </div>
        </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><Link to="#">Link <span class="sr-only">(current)</span></Link></li>
        <li><Link to="#">Link</Link></li>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search" />
        </div>
      </form>
    </div>
  </div>
</nav>
    )
  }
})

{/*
<img alt="Brand" src="...">
*/}

export default HeaderPage;