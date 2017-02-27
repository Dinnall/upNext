import React from 'react';
import $ from 'jquery';
import {withRouter} from "react-router";
import Nav from './navBar.jsx';
import {Link} from 'react-router';


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
                                    <img src="../images/icn-twitter@3x.png" className="icn-twitter" height="35px" width="35px"></img>
                                </li>

                                <li>
                                    <img src="../images/icn-github@2x.png" className="icn-github" height="35px" width="35px"></img>
                                </li>

                                <li>
                                    <a href={this.state.linkedin} target="_blank"><img src="../images/icn-linkedin@3x.png" className="icn-linkedin" height="35px" width="35px"></img></a>
                                </li>
                                <li>
                                    <img src="../images/icn-website@3x.png" className="icn-website" height="35px" width="35px"></img>
                                </li>

                            </ul>

                            <div className="interact-buttons">

                                <div className="interact button">

                                    Mentor Me

                                </div>
                                <div className="interact button">

                                    Hire Me!

                                </div>

                            </div>

                        </div>

                        <div className="project-wrapper">

                            {/* <hr className="line"></hr> */}

                            <section className="projects-section">
                                <div className="rectangle">{this.state.projects.map(function(val, idx) {
                                        return (
                                            <div key={idx} className="map-wrapper">
                                                <div className="descript">
                                    <Link to={"/projects/" + val.id} key={idx}>  <p>{val.title}</p> </Link>
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
