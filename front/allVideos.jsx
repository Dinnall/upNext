import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';

const AllListings = React.createClass({
	getInitialState(){
		return {video: []}
	},
	componentDidMount(){
		 {
			$.ajax({
				url: '/api/video',
				type: "GET"
			})
			.done( (data) => {
				this.setState({video: data})
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

				
					{this.state.video.length=== 0 ? "Loading..." : this.state.video.map((place, idx)=> {
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

export default AllListings;