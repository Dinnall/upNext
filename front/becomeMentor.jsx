import React from 'react';
import { render } from 'react-dom';
import { IndexRoute,Link, Router, Route, browserHistory, hashHistory } from 'react-router';

import '../src/style/nya.css';

const MentorPage = React.createClass ({
    getInitialState() {
    return {name: '', email: '', website: '', about: ''}
  },
  handleSubmit(event) {
    alert('Thank You! We Will Be In Touch Shortly')
    event.preventDefault();
  },
  render: function(){
    return (
      <div>
        <h1 className='pageTitle'>Become A Mentor!</h1>
        <div className='flexContainerMP'>
        <div className='column1'>
        <h3>Benefits of Mentorship</h3>
        <ul>
          <li>Provide a fascinating link to what is happening in the younger, less experienced part of the tech industry.</li>
          <li>Helping the mentee develop and advance through their career.</li>
          <li>Find talent for your development team.</li>
        </ul>
        <h3>Requirements</h3>
        <ul>
          <li>5+ Years of experince as Designer/Developer</li>
          <li>The willingness to educates the mentoree on how to accept feedback in important areas, such as communications, technical abilities, change management, and leadership skills.</li>
          <li>A positive attitude! ☺</li>
        </ul>
        </div>
        <div className='column2'>
        <h3>upNext Mentor Sign Up</h3>
        <h6>* Required </h6>
        <form onSubmit={this.handleSubmit}>
          <table>
          <tbody>
            <tr>
              <td>
                <label>Name: *</label>
              </td>
              <td>
                <input onChange={this.handleChange} type="text" size="30" required />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email: *</label>
              </td>
              <td>
                <input type="text" size="30" required />
              </td>
            </tr>
            <tr>
              <td>
                <label>Website: </label>
              </td>
              <td>
                <input type="text" size="30" />
              </td>
            </tr>
            <tr>
              <td>
                I am a:
              </td>
              <td className="radio">
                <input type="radio" className="radio" value="dev" /> Developer
                <br />
                <input type="radio" className="radio" value="des" /> Designer
              </td>
            </tr>
            <tr>
              <td>
                <label>Tell Us About <br/> Yourself:</label>
              </td>
              <td>
                <textarea cols="30" rows="6" required></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" className="submitForm" value="Submit"/>
              </td>
            </tr>
          </tbody>
          </table>
        </form>
        </div>
        </div>
      </div>
    )
  }
})

export default MentorPage;