import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';


// import './App.css';
// import './Main.css';
// import './Index.css';

const App = (props) => {
	return (
		<div>
	hello world  
		</div>
	)
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}> 
		<IndexRoute component={Home} />
			<Route path="/home" component={Home} />
			<Route path="/volunteer-login" component={HostVolunteerLogin} />
			<Route path="/guest-login" component={GuestLogin} />
			<Route path="/room/:id" component={RoomDetails} />
			<Route path="/show-all" component={AllListings} />
			<Route path="/create-post" component={PostARoom} />
		</Route>
	</Router>,
	document.getElementById('root')
)