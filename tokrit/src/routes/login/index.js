import React, { Component } from 'react';

import styles from './index.module.scss';

class LoginPage extends Component {
  render() {
    return (
      <div className={styles.loginPageContainer}>
        <div className={styles.loginPageModal}>
          <div className={styles.loginPageHeader}>
            Sign in to <span className={styles.loginPageHeaderOrganization}>Tokrit</span>
          </div>
          <div className={styles.loginPageContent}>
            <div className={styles.loginPageInputContainer}>
              <input type="email" placeholder="Email" className={styles.loginPageEmailInput}/>
              <input type="password" placeholder="Password" className={styles.loginPagePasswordInput}/>
            </div>

            <div className={styles.loginPageButtonContainer}>
              <button className={styles.loginPageSignInButton}>
                Sign In
              </button>
              <button className={styles.loginPageSignUpButton}>
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
