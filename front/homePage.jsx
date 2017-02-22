import React from 'react';
import { render } from 'react-dom';
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';

import '../src/style/nya.css';
import SignUpPage from './signUp.jsx';
import LogInPage from './logIn.jsx';
import FooterPage from './footer.jsx';


const MainPage = React.createClass({
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
        <img className='rectangle_4' src='../images/rectangle_four.png' />
         <Link className ="signUp" to='/signup'>Sign Up</Link>
        <p className='share'>Share and connect.Upnext is a space for creators</p>

        <div className='secondComp'>
            {this.state.project.length=== 0 ? "Loading..." : this.state.project.map((projects, idx)=> {
            return (
                   <Link to={"/projects/" + projects.id} key={idx}>
                <div className="projectGrid">
                  <p className="projectTitle">{projects.title}</p>
                  <img className="videoBox" src={projects.pictureUrl} />
                  <p className="gitUsername"><strong>{'By: '+ projects.gitUsername}</strong></p>
                </div>
                     </Link>
                    )
                     })}
                </div>

          <div className='thirdComp'>
              <p className='thirdShare'>Share your work.Connect with the community</p>
              <p className='thirdUp'>UpNext believes in the democratization of technical education.Technology is constantly evolving.Stay updated with UpNext</p>
          </div>

            <img className='rectangle_4' src='../images/mentor.png' />
           <div className='fourthComp'>


           </div>
      </div>
    )
  }
})


export default MainPage
