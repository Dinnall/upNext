import React from 'react';

const Profile = React.createClass({
    render() {
        var data = {
            "AppName": "Facebook",
            "Description": "A Social networking site that connects all people in the world"
        }

        return (
            <div>

                <div>

                    <div className="thecard">
                        <div className="card-img">
                            <img src="http://www.irishmark.net/MEDIA//2010/02/NewFacebook.png"></img>
                        </div>
                        <div className="card-caption">

                            <h1>{data.AppName}</h1>
                            <p>{data.Description}</p>

                        </div>
                        <div className="card-outmore"></div>
                    </div>

                </div>
                <div className="card">
                    <img src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" alt="Avatar"></img>
                    <div className="container">
                        <h4>
                            <b>John Doe</b>
                        </h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>

            </div>
        )
    }
})

export default Profile;
