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
  renderHead() {
    return(

              <div className="project-info">
                  <div className="oval">
                      <img src={this.state.projectDetail.pictureUrl}/>
                  </div>
                  <div id="name-area">
                      <h1 className="name">{this.state.projectDetail.title}</h1>
                      <p className="position">
                          By: <Link to={'/profile/' + this.state.projectDetail.UserId}>{this.state.projectDetail.firstName}</Link>
                      </p>
                      <p className="location">
                          <a href={this.state.projectDetail.gitRepo} target="_blank">{this.state.projectDetail.gitRepo}</a>
                      </p>

                  </div>
              </div>
    )
  },
  render(){
    if(this.state.projectDetail){
    return(
      <div>
        <div className="My-Profile">
          {this.renderHead()}
            <div className="master-wrapper-project">

        <div>
        <ReactPlayer url={this.state.projectDetail.videoUrl} playing />
        {/* <p>{this.state.projectDetail.description}</p> */}
           <div>
         </div>
        </div>
        <div className="descript-area">
          <p id="project-d"> {this.state.projectDetail.description}</p>
          {/* <p id="project-d"> Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in,
            elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa,
            convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.
            Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </div>
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
