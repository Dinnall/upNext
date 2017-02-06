import React from 'react';
import { render } from 'react-dom';
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';

import '../src/style/nya.css';

const AllProjectsPage = React.createClass ({
getInitialState() {
    return {}
  },
  render: function(){
    return (
      <div className='flexContainerAPP'>
        <div className='header'>
          <h1>Header Content</h1>
        </div>
        <div className='projectsPage'>
          <h1>Projects Page</h1>
        </div>
        <div className='footer'>
          <h1>Footer Content</h1>
        </div>
      </div>
    )
  }
})

export default AllProjectsPage;