import React from 'react';
import {render} from 'react-dom';
import {
    IndexRoute,
    Link,
    Router,
    Route,
    browserHistory,
    hashHistory
} from 'react-router';


import '../src/style/nya.css';
import SignUpPage from './signUp.jsx';
import LogInPage from './logIn.jsx';
import FooterPage from './footer.jsx';

const MainPage = React.createClass({
    getInitialState() {
        return {project: []}
    },
    componentDidMount() {
        {
            $.ajax({url: '/api/projects', type: "GET"}).done((data) => {
                this.setState({project: data})
            })
        }
    },
    render: function() {
        return (
            <div>

                <div id="hero">





                    <div className="slogan">
                        <div className="22">
                            <p id="slogan-1">Share and connect.</p>
                            <p>Upnext is a space for creators</p>
                        </div>
                        <div id="sign-up-button">
                            <Link className="signUp" to='/signup'>Sign Up</Link>
                        </div>
                    </div>

                </div>

                {/* <img className='rectangle_4' src='../images/rectangle_four.png' />
         <Link className ="signUp" to='/signup'>Sign Up</Link>

        <p className='share'>Share and connect.Upnext is a space for creators</p> */}

                <div className='projects-section'>
                    <div className="rectangle">{this.state.project.length === 0
                            ? "Loading..."
                            : this.state.project.map((projects, idx) => {
                                return (

                                    <div key={idx} className="map-wrapper">
                                        <div className="descript">
                                          <Link to={"/projects/" + projects.id} key={idx}>  <p>{projects.title}</p> </Link>
                                        </div>
                                        <div className="image-area" src={projects.pictureUrl}>
                                            <img src={projects.pictureUrl}/>
                                        </div>
                                        <Link to={"/profile/" + projects.id} key={idx}>
                                            <p className="gitUsername">{'By: ' + projects.firstName}</p>
                                        </Link>
                                    </div>

                                )
                            })}
                    </div>

                </div>
                <div className="slogan-2">
                    <div className="slogan-master">
                        <div className="slogan-2-child-1">
                            <p id="p-1">Share your work,</p>
                            <p>Connect with the community</p>
                        </div>
                        <div className="slogan-2-child-2">
                            <p>osehfo;hgoeihg;oiehqgohwqhgeopfihgoiehgfioe;hgo</p>
                            <p>osehfo;hgoeihg;oiehqgohwqhg soihfoisdhfsghsgs sgsgdgwge</p>
                            <p>osehfo;hgoeihg;oiehqgohwqhgreighoierhgoohhoherhgohgehrg</p>
                            <p>osehfo;hgoeihg;oiehqgohwqhgreighoierhgoohhoherhgohgehrg</p>
                            <p>osehfo;hgoeihg;oiehqgohwqhgreighoierhgoohhoherhgohgehrg</p>
                        </div>
                    </div>

                </div>

                <hr className="line"></hr>

            <div id="slogan-master-2">
                <div id="slogan-2-child-1">
                    <p id="p-1-1">Become a Mentor!</p>
                </div>
              </div>



           <div className="bottom-banner">
             {/* <div className="mentor-mask">

             </div> */}
             <div className="mentor-text">
               {/* <h1>Hello</h1> */}
             </div>

            {/* <img src='../images/mentor4.png' /> */}



           </div>

            </div>
        )
    }
})

export default MainPage
