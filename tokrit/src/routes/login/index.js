import React, { Component } from 'react'

import '../../scss/LoginPage.scss';

class LoginPage extends Component {
  render() {
    return (
      <div className="loginPage-container">
        <div className="loginPage-modal">
          <div className="loginPage-header">
            Sign in to <span className="loginPage-headerOrganization">Tokrit</span>
          </div>
          <div className="loginPage-content">
            <div className="loginPage-inputContainer">
              <input type="email" placeholder="Email" className="loginPage-emailInput"/>
              <input type="password" placeholder="Password" className="loginPage-passwordInput"/>
            </div>

            <div className="loginPage-buttonContainer">
              <button className="loginPage-signInButton">
                Sign In
              </button>
              <button className="loginPage-signUpButton">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
