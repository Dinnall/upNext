import React from 'react';
import $ from 'jquery';
import {withRouter} from "react-router";
import Nav from './navBar.jsx';

const Profile = React.createClass({
    componentDidMount() {
        $.ajax({method: 'GET', url: `/api/user/userId/${this.props.router.params.id}`}).then((response) => {
            console.log(response)
            this.setState({
                firstName: response.firstName,
                lastName: response.lastName,
                email: response.email,
                id: response.id,
                projects: response.Projects,
                imageUrl: response.imageUrl,
                bio: response.bio,
                linkedin: response.linkedin

            })
        })
    },
    getInitialState() {
        return ({firstName: "", lastName: "", email: "", imageUrl: "", projects: []})
    },
    render() {
        console.log("projects", this.state.projects)
        return (
            <div>
                <div className="rectangle-2">
                    <Nav/>
                </div>

                <div className="My-Profile">

                    <div className="master-wrapper">
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
                                    <img src="img/icn-twitter.png" srcSet="img/icn-twitter@2x.png 2x,
  img/icn-twitter@3x.png 3x" className="icn-twitter" height="35px" width="35px"></img>
                                </li>

                                <li>
                                    <img src="img/icn-github.png" srcSet="img/icn-github@2x.png 2x,
  img/icn-github@3x.png 3x" className="icn-github" height="35px" width="35px"></img>
                                </li>

                                <li>
                                    <img src="img/icn-linkedin.png" srcSet="img/icn-linkedin@2x.png 2x,
  img/icn-linkedin@3x.png 3x" className="icn-linkedin" height="35px" width="35px"></img>
                                </li>
                                <li>
                                    <img src="img/icn-website.png" srcSet="img/icn-website@2x.png 2x,
  img/icn-website@3x.png 3x" className="icn-website" height="35px" width="35px"></img>
                                </li>

                            </ul>

                            <ul className="interact-buttons">

                                <li className="interact">

                                    <a id="buttons" href="">
                                        <b>Mentor Me</b>
                                    </a>

                                </li>
                                <li className="interact">

                                    <a id="buttons" href="">
                                        <b>Hire Me!</b>
                                    </a>

                                </li>

                            </ul>

                        </div>

                        <div className="project-wrapper">

                            <hr className="line"></hr>

                            <section className="projects-section">
                                <div className="rectangle">{this.state.projects.map(function(val, idx) {
                                  return (
                                    <div key={idx} className="map-wrapper">
                                        <div className="descript">
                                            <p>{val.title}</p>
                                        </div>
                                        <div className="image-area">
                                          <img src={val.pictureUrl}></img>
                                        </div>
                                    </div>

                                  )
                                })}


                                </div>
                            </section>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
})

export default withRouter(Profile);
