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
        <p>
          Render all projects here 
        </p>
      </div>
    )
  }
})

export default AllProjectsPage;