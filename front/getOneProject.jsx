import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';


const getOneProject = React.createClass({
  getInitialState(){
    return {project: []}
  },
  componentDidMount(){
     {
      $.ajax({
        url: '/api/projects',
        type: "GET"
      })
      .done( (data) => {
        this.setState({project: data})
      })
    }
  },
  render: function() {
    return (
      <div>

        <Link to='/'><img className='page_1' src='../images/page_one.png' /></Link>


                            <div className="profile-info">

                            <div className="oval">
                                <img src={this.state.imageUrl}/>
                            </div>

                            <div>

                                <h1 className="name">{this.state.firstName} {this.state.lastName}</h1>

                                <p className="location">
                                    New York, NY
                                </p>

                                <p className="position">
                                    Full Stack Web Engineer, C4Q
                                </p>

                            </div>
                            <ul className="links">
                                <li>
                                    <img src="../images/icn-twitter.png" className="icn-twitter" height="35px" width="35px"></img>
                                </li>

                                <li>
                                    <img src="../images/icn-github.png" className="icn-github" height="35px" width="35px"></img>
                                </li>

                                <li>
                                    <img src="../images/icn-linkedin.png" className="icn-linkedin" height="35px" width="35px"></img>
                                </li>
                                <li>
                                    <img src="../images/icn-website.png" className="icn-website" height="35px" width="35px"></img>
                                </li>

                            </ul>
                            </div>





          <div className='secondComp'>
            {this.state.project.length=== 0 ? "Loading..." : this.state.project.map((projects, idx)=> {
            return (

              <Link to={"/projects/" + projects.id} key={idx}>
                <div className="projectGrid">
                  <p className="projectTitle">{projects.title}</p>
                  <img  src={projects.pictureUrl} />
                   </div>
              </Link>
                    )
                     })}
                </div>
          </div>
    )
  }
})


export default getOneProject