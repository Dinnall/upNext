import React from 'react';
import {Link, withRouter} from 'react-router';
import Modal from 'react-modal';
import Login from './login.jsx'


const modalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


const Nav = React.createClass({
    getInitialState() {
        return {
          user: null,
          showModal: false
        }

    },
    render() {
        console.log(this.state.user);

        return (

            <div>

                <div className="rectangle-2">
                    <nav className="topnav" id="myTopnav">
                        <Link to="/">
                            <img src="../images/page-1@3x.png" className="page-1"></img>
                        </Link>
                        <li>
                            {this.state.user
                                ? (
                                    <a href="javascript:void(0);" onClick={this.logout}>Sign out
                                    </a>
                                )
                                : (
                                    <a href="javascript:void(0);" onClick={this.login}>Log in
                                    </a>
                                )
}
                        </li>
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
                <Modal
                  isOpen={this.state.showModal}
                  onAfterOpen={null}
                  onRequestClose={null}
                  closeTimeoutMS={3}
                  style={modalStyles}
                  contentLabel="Modal"

                >
                  <Login onClose={(user)=>{
                    this.setState({
                       showModal: false,
                       user: user
                    })
                    this.props.router.push('/profile/' + user.id)
                  }}/>
                </Modal>

            </div>
        )
    },
    onChange: function() {
        console.log(this);
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    },
    login: function() {
        this.setState({
          showModal: true

        })
    },
    logout: function() {
        this.setState({user: null})
    }
})

export default withRouter(Nav);
