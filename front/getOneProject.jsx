import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';
import ReactPlayer from 'react-player'

const getOneProject = React.createClass({
  getInitialState(){
    return {projectDetail: []}
  },
  componentDidMount(){
     {
      var id = this.props.params.id;
      console.log(id)
      $.ajax({
        url: '/api/projects/'+ id,
        type: "GET"
      })
      .done( (data) => {
        this.setState({projectDetail: data})
        console.log(this.state.projectDetail)
      })
    }
  },
  render(){
    if(this.state.projectDetail){
    return(
      <div>
        <div>
        <ReactPlayer url={this.state.projectDetail.videoUrl} playing />
        <p>{this.state.projectDetail.description}</p>
           <div>
         </div>
        </div>
      </div>
    )}
    else{
      return(
      <div>
      <Link to='/'><img className='page_1' src='../images/page_one.png' /></Link>
      Loading...</div>)
    }
  }
})

export default getOneProject;

