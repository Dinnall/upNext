import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';


const Logout = React.createClass({
  getInitialState(){
    return {
      user: null
    }
  },
    handleLogout(event) {
      console.log("hello")
      $.ajax({
        url: '/api/user/logout',
        type: 'GET'
      })
    },
    render: function() {

      return(
        <div>
          <p className="sign-out" onClick={this.handleLogout}>Sign out</p>
        </div>
      )
    }
  })

export default Logout
