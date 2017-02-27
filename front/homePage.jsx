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
            $.ajax({
            url: '/api/projects/home',
            type: "GET"
        })
            .done((data) => {
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
                            <p>UpNEXT is always seeking highly experienced individuals who want to give back to the community by offering their support.</p>
                            <p>We are looking for mentors with a passion for sharing what they know.</p>
                            <p>Students will communicate with their mentors online.</p>
                            <p>If you are interested in becoming a mentor,we invite you to tell us more about yourself.</p>
                        </div>
                    </div>

                </div>
   
                <hr className="line"></hr>

            <div id="slogan-master-2">
                <div id="slogan-2-child-1">
                    <Link to='/mentor'><p>Become a Mentor!</p></Link>
                </div>
              </div>



           <div className="bottom-banner">

            {/* <img src='../images/mentor4.png' /> */}



           </div>

            </div>
        )
    }
})

export default MainPage
