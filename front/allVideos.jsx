import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';

const Projects = React.createClass({
	getInitialState(){
		return {project: []}
	},
	componentDidMount(){
		 {
			$.ajax({
				url: '/api/project',
				type: "GET"
			})
			.done( (data) => {
				this.setState({project: data})
			})
			.catch((error) => {
				console.log(error);
			})
		}
	},
	render: function(){
		return(
			<div>
				<h2>All Available Listings</h2>

				
					{this.state.project.length=== 0 ? "Loading..." : this.state.project.map((place, idx)=> {
						return (

								<Link to={"/room/" + place.id} key={idx}>
								 <div className="oneList">
							  		<img  className="Img" src={place.images[0]} />
							  		<p className="descriptionClass"><strong>{place.description}</strong>/PLACE WHAT HERE</p>
							  		
									</div>
								</Link>
							
						)
					})}
				

			</div>
		)
	}
})

export default Projects;