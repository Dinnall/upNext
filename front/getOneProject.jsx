import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';


const getOneProject = React.createClass({
  getInitialState(){
    return {projectDetail: []}
  },
  componentDidMount(){
     {
      var id = this.props.params.id;
      $.ajax({
        url: '/api/projects'  + id,
        type: "GET"
      })
      .done( (data) => {
        this.setState({projectDetail: data})
      })
    }
  },
  render(){
    if(this.state.projectDetail){
    return(
      <div>
        <div>
           <img src={this.state.projectDetail.pictureUrl} />
            <p>{this.state.projectDetail.description}</p>
           <div>
         </div>
        </div>
      </div>
    )}
    else{
      return(
      <div>
      <Link to='/'><img className='page_1' src='../images/page_one.png' /></Link>
      Loading...</div>)
    }
  }
})

export default getOneProject;






// Render with Craigs profile snippet

// import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import {Link} from 'react-router';


// const getOneProject = React.createClass({
//   getInitialState(){
//     return {projectDetail: []}
//   },
//   componentDidMount(){
//      {
//       var id = this.props.params.id;
//       $.ajax({
//         url: '/api/projects'  + id,
//         type: "GET"
//       })
//       .done( (data) => {
//         this.setState({projectDetail: data})
//       })
//     }
//   },
//   render(){
//     if(this.state.projectDetail){
//     return(
//       <div>

//          <div className="profile-info">
//             <Link to='/'><img className='page_1' src='../images/page_one.png' /></Link>

//                             <div className="oval">
//                                 <img src={this.state.imageUrl}/>
//                             </div>

//                             <div>

//

//                                 <p className="location">
//                                     New York, NY
//                                 </p>

//                                 <p className="position">
//                                     Full Stack Web Engineer, C4Q
//                                 </p>

//                             </div>
//                             <ul className="links">
//                                 <li>
//                                     <img src="../images/icn-twitter.png" className="icn-twitter" height="35px" width="35px"></img>
//                                 </li>

//                                 <li>
//                                     <img src="../images/icn-github.png" className="icn-github" height="35px" width="35px"></img>
//                                 </li>

//                                 <li>
//                                     <img src="../images/icn-linkedin.png" className="icn-linkedin" height="35px" width="35px"></img>
//                                 </li>
//                                 <li>
//                                     <img src="../images/icn-website.png" className="icn-website" height="35px" width="35px"></img>
//                                 </li>

//                             </ul>
//                             </div>
//         <div>
//           <img src={this.state.projectDetail.pictureUrl} />
//           <p>{this.state.projectDetail.description}</p>
//            <div>

//            </div>
//         </div>
//       </div>
//     )}
//     else{
//       return(
//       <div>
//     <Link to='/'><img className='page_1' src='../images/page_one.png' /></Link>
//       Loading...</div>)
//     }
//   }
// })

// export default getOneProject;
