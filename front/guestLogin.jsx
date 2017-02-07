import React from 'react';
import {Link,browserHistory} from 'react-router';
// import { withRouter } from 'react-router'


 {/*GALLERY COMPONENT & SIDEBAR*/}
var GuestLogin = React.createClass({

	submitLogin(){

	  //push to home
		browserHistory.push('/show-all')
		
		
	},
  
    render() {
    return (
      <div>

	        {/*LOGIN FORM*/} 
		    <div className="log">
		        <div className="card loginBox">
					<form >
              <h4>Guest Login</h4>
					    <input className="inputField" type="email" placeholder="Email"  required/>
              <br></br>
					    <input className="inputField" type="password" placeholder="Password" required/>
              <br></br>
					    <input className="btn-success btnStyling" type="button" onClick={this.submitLogin} value=" Login " />
					</form>
		        </div>
		    </div>


      </div>
      
    )
  }
})


export default GuestLogin;