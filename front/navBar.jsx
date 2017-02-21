import React from 'react';

const Nav = React.createClass({
    render() {
        return (
            <div>

                <div className="rectangle-2">
                    <nav className="topnav" id="myTopnav">
                        <img src="./images/page-1.png" className="page-1"></img>
                        <li>
                            <a href="#home">Sign Out</a>
                        </li>
                        <li>
                            <a href="#news">My Profile</a>
                        </li>
                        <li>
                            <a href="#contact">All Projects</a>
                        </li>

                        <li className="rectangle-5">

                            <a id="add-projects" href="#about">+ Add Project</a>

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
