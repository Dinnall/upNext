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
                bio: response.bio

            })
        })
    },
    getInitialState() {
        return ({firstName: "", lastName: "", email: "", imageUrl: "", projects: []})
    },
    render() {
        console.log("projects", this.state.projects)
        return (

            <div className="master">
              <Nav />
                <div className="flax">
                    <div className='card'>
                        <div className='card_left'>
                            <img src={this.state.imageUrl}></img>
                        </div>
                        <div className='card_right'>
                            <h1>{this.state.firstName} {this.state.lastName}</h1>
                            <div className='card_right__details'>
                                <ul>
                                    <li>GITHUB</li>
                                    <li>LINKED IN</li>
                                    <li>WEB APP URL</li>
                                </ul>
                                <div className='card_right__review'>
                                    <p>{this.state.bio}</p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="card">

                    <img className="card-img" src={this.state.imageUrl}></img>

                    <div className="container">
                        <h4>
                            <b>{this.state.firstName} {this.state.lastName}</b>
                        </h4>
                        <p>{this.state.email}</p>
                    </div>

                </div> */}

                <div className="flex-wrapper">
                    <div className="flex">{this.state.projects.map(function(val, idx) {
                            return (

                                <div key={idx} className="thecard">
                                    <div className="card-img">
                                        <img src={val.pictureUrl}></img>
                                        {/* <iframe width="560" height="315" src={val.videoUrl} frameBorder="0" allowFullScreen></iframe> */}
                                    </div>
                                    <div className="card-caption">

                                        <h1>{val.title}</h1>
                                        <p>{val.description}</p>
                                        {/* <a href={val.url}><img src="http://www.freeiconspng.com/uploads/github-logo-icon-30.png" height="10px" width="10px"></img></a> */}

                                    </div>
                                    <div className="card-outmore"></div>
                                </div>

                            )

                        })}</div>

                </div>

            </div>
        )
    }
})

export default withRouter(Profile);
