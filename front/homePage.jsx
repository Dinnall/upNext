import React from 'react';
import {render} from 'react-dom';
import {
    IndexRoute,
    Link,
    Router,
    Route,
    browserHistory,
    hashHistory
} from 'react-router';

import '../src/style/nya.css';
import SignUpPage from './signUp.jsx';
import LogInPage from './logIn.jsx';
import FooterPage from './footer.jsx';

const MainPage = React.createClass({
    render: function() {
        return (
            <div>
                <nav>
                    <ul className='ulLink'>
                        <li className='li1'>
                            <Link to='/signup'>Sign Up</Link>
                        </li>
                        <li className='li2'>
                            <Link to='/login'>Log In</Link>
                        </li>
                    </ul>
                </nav>


                {/* <div id="wrapper">

                    <div id="hero">

                        <div className="header">
                            <h1>
                                Welcome to my site
                            </h1>
                        </div>

                    </div>

                    <div id="content">
                        <h2>
                            Creators Thrive
                        </h2>
                        <span>
                            <b>
                                Here.
                            </b>
                        </span>
                        <p>
                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        </p>
                    </div>
                    <div id="footer">
                        <p>
                            I am the footer, and you have scroll down to see me.</p>
                    </div>
                </div> */}

                <h1 className='smarter'>A smarter way to learn</h1>
        <div className='secondBorder'></div>
        <div className='thirdBorder'></div>
        <FooterPage />
            </div>
        )
    }
})

export default MainPage
