import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';

const uploadProject = React.createClass({
	getInitialState(){
		return {}
	},
	componentDidMount(){
		 
	},
	render: function(){
		return(
			<div>
				<form>
					title
					description
    			gitUsername 
    			gitRepo
    			url
    			videoUrl
				</form>
			</div>
		)
	}
})

export default uploadProject;