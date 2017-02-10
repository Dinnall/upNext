import React from 'react';
import { render } from 'react-dom';
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';

import '../src/style/nya.css';

const FooterPage = React.createClass ({
getInitialState() {
    return {}
  },
  render: function(){
    return (
      <div className='flexContainerFooter'>
        <div className='footer'>
          <h1>Footer Content!!</h1>
        </div>
      </div>
    )
  }
})

export default FooterPage;