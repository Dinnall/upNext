import React from 'react';
import { render } from 'react-dom';
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';

import Nav from './navBar.jsx';
import FooterPage from './footer.jsx';
import '../src/style/nya.css';

const AllProjectsPage = React.createClass ({
  getInitialState() {
    return {}
  },
  render: function(){
    return (
      <div>
        <Nav />
        <table className='projcectsTable'>
          <tbody>
            <tr>
              <td>
                <img className='tableItem' src='../images/page_one.png'></img>
              </td>
              <td>
                <img className='tableItem' src='../images/page_one.png'></img>
              </td>
              <td>
                <img className='tableItem' src='../images/page_one.png'></img>
              </td>
              <td>
                <img className='tableItem' src='../images/page_one.png'></img>
              </td>
            </tr>
          </tbody>
        </table>
        <FooterPage />
      </div>
    )
  }
})

export default AllProjectsPage;