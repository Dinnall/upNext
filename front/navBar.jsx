import React from 'react';
import {Link} from 'react-router';

const Nav = React.createClass({
    render() {
        return (
            <div>

                <div className="rectangle-2">
                    <nav className="topnav" id="myTopnav">
                    <Link to="/"><img src="../images/page-1.png" className="page-1"></img></Link>
                        <li>
                            <Link to="/profile:id">My Profile</Link>
                        </li>
                        <li>
                            <Link to="/allProjects">All Projects</Link>
                        </li>

                        <li className="rectangle-5">

                            <Link id="add-projects" to="/upload">+ Add Project</Link>

                        </li>

                        <li className="icon">
                            <a href="javascript:void(0);" onClick={this.onChange}>&#9776;</a>
                        </li>
                    </nav>
                </div>
            </div>
        )
    },
    onChange: function() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
})

export default Nav;


{/* <Route path='/signup' component={SignUpPage} />
<Route path='/login' component={LogInPage} />
<Route path='/upload' component={UploadProject} />
<Route path='/allProjects' component={allProjects} />
<Route path='/profile/:id' component={ProfilePage} /> */}
