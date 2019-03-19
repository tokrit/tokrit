import React from 'react';

import styles from './index-module.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isUserLoggedIn: false };
  }

  render() {
    return (
      <React.Fragment>
        { this.props.isLoggedIn &&
          <ul className={styles.nav}>
            <li><a style={styles.firstChildStyling} href="/" className="logo">TOKRIT</a></li>
            <li className={styles.navbarItem}><a href="/announcement">ANNOUNCEMENT</a></li>
            <li className={styles.navbarItem}><a href="/about">ABOUT US</a></li>
            <li className={styles.navbarItem}>
              <a href="/login" style={styles.lastChildStyling}>
                <i className= "far fa-user-circle" />
              </a>
            </li>
          </ul>
        }
      </React.Fragment>
    );
  }
}

export default Navigation;
