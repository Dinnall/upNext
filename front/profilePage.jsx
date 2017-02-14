import React from 'react';
import $ from 'jquery';
import {withRouter} from "react-router";

const Profile = React.createClass({
     componentDidMount() {
       $.ajax({
         method: 'GET',
         url: `/api/user/userId/${this.props.router.params.id}`,
       }).then((response) => {
         console.log(response)
         this.setState({
           firstName: response.firstName,
           lastName: response.lastName,
           email: response.email,
           id: response.id,
           projects: response.Projects
         })
       })
     },
     getInitialState() {
       return (
         { firstName: "",
           lastName: "",
           email: "",
           imageUrl: "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png",
           projects: []
         }
       )
     },
    render() {
        console.log("projects",this.state.projects)
        return (
            <div>


                <div className="card">
                    <img src={this.state.imageUrl}></img>
                    <div className="container">
                        <h4>
                            <b>{this.state.firstName} {this.state.lastName}</b>
                        </h4>
                        <p>{this.state.email}</p>
                    </div>
                </div>



                <div>
                  <ul>{this.state.projects.map(function(val, idx) {
                    console.log(val)
                    return(


                        <div key={idx} className="thecard">
                            <div className="card-img">
                                <img src="http://www.irishmark.net/MEDIA//2010/02/NewFacebook.png"></img>
                            </div>
                            <div className="card-caption">

                                <h1>{val.title}</h1>
                                <p>{val.description}</p>

                            </div>
                            <div className="card-outmore"></div>
                        </div>

                    )

                  })}</ul>





                </div>




            </div>
        )
    }
})

export default withRouter(Profile);
