import React from 'react';
import { render } from 'react-dom';
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';

import '../src/style/nya.css';

const MainPage = React.createClass ({
getInitialState() {
    return {}
  },
  render: function(){
    return (
      <div className='flexContainerAPP'>
        <div className='projectsPage'>
          <p>
            <h1>render all projects here</h1> 
          </p>
        </div>
      </div>
    )
  }
})

export default MainPage;