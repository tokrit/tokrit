import React from 'react';

import styles from './index.module.scss';

class Navigation extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = { isUserLoggedIn: false };
  }

  render() {
    return (
      <ul className={styles.nav}>
        <li><a href="/" className={styles.firstChildStyling}>TOKRIT</a></li>
        <li className={styles.navbarItem}><a href="/announcement">ANNOUNCEMENT</a></li>
        <li className={styles.navbarItem}><a href="/about">ABOUT US</a></li>
        <li className={styles.navbarItem}>
          <a href="/login" className={styles.lastChildStyling}>
            <i className="far fa-user-circle" />
          </a>
        </li>
      </ul>
    );
  }
}

export default Navigation;
