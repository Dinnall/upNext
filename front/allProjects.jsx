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
      <ul className='flexContainerAPP'>
        {/*
          this.state.(idk).map((idk => {
            return <li idk={idk} key={idk.id}>{idk.name}</li>
          }))
        

        */}
      </ul>
    )
  }
})

export default AllProjectsPage;