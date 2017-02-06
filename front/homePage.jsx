import React from 'react';
import { render } from 'react-dom';
 
const MainPage = React.createClass ({
   render: function(){
    return(
      <div>
         <nav>
             <div>
             <ul className="ulLink">
              <li className="li1">Sign-Up</li> 
              <li className="li2">Log-In</li>
             </ul>
             </div>
             <h1 className="smarter">A smarter way to learn</h1>
        </nav>

      <div className="secondBorder"></div>

      <div className="thirdBorder"></div>
        
      </div>
      )
  }
})

export default MainPage;




