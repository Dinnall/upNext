import React from 'react';

const Nav = React.createClass({
    render() {
        return (
            <div>
                <nav className="topnav" id="myTopnav">
                    <img id="logo" src="http://tour.treyratcliff.com/wp-content/uploads/2015/06/viewbug_transparent.png" height="50px" width="20px"></img>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#news">News</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li className="icon">
                        <a href="javascript:void(0);" onClick={this.onChange}>&#9776;</a>
                    </li>
                </nav>
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
