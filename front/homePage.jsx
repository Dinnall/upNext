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

         <div className='topStyle'>
            <div className='rectangle_2'>
               <Link to='/'><img className='page_1' src='../images/page_one.png' /></Link>
                <p className='share_and_connect'>Share and connect.Upnext is a space for creators</p>
                  <img className='rectangle_4' src='../images/rectangle_four.png' />


               <div>
                {this.state.project.length=== 0 ? "Loading..." : this.state.project.map((projects, idx)=> {
                return (
                <Link to={"/projects/" + projects.id} key={idx}>
                <div className="oneList">
                  <p className="projectTitle">{projects.title}</p>
                    <img className="Img" src={projects.videoUrl} />
                    <p className="descriptionClass"><strong>{projects.gitUsername}</strong></p>

                  </div>
                </Link>

            )
          })}
               </div>



                <img className='mentor' src='../images/mentor.png' />
            </div>
          </div>








      </div>
    )
  }
})


export default MainPage

















        //  <nav>
        //   <ul className='ulLink'>
        //     <li className='li1'><Link to='/signup'>Sign Up</Link></li>
        //     <li className='li2'><Link to='/login'>Log In</Link></li>
        //   </ul>
        // </nav>
        // <h1 className='smarter'>A smarter way to learn</h1>
        // <div className='secondBorder'></div>
        // <div className='thirdBorder'></div>
