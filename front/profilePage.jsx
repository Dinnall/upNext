import React from 'react';
import $ from 'jquery';
import {withRouter} from "react-router";

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
              imageUrl: response.imageUrl

            })
        })
    },
    getInitialState() {
        return ({
          firstName: "",
          lastName: "",
          email: "",
          imageUrl: "",
          projects: []
        })
    },
    render() {
        console.log("projects", this.state.projects)
        return (
            <div>



                <div className="card">
                  <div>
                    <img src={this.state.imageUrl}></img>
                  </div>
                    <div className="container">
                        <h4>
                            <b>{this.state.firstName} {this.state.lastName}</b>
                        </h4>
                        <p>{this.state.email}</p>
                    </div>
                </div>



                <div>
                    <div className="flex">{this.state.projects.map(function(val, idx) {
                            return (

                                <div key={idx} className="thecard">
                                    <div className="card-img">
                                        <img src={val.pictureUrl}></img>
                                        {/* <video src={val.videoUrl}></video> */}
                                    </div>
                                    <div className="card-caption">

                                        <h1>{val.title}</h1>
                                        <p>{val.description}</p>
                                        <p>{val.url}</p>

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
