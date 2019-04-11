import React from 'react';

// Image / svgs
import LogoIcon from '../../assets/home/tokrit-logo.svg';

import styles from './index.module.scss';

class Navigation extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = { isUserLoggedIn: false };
  }

  render() {
    return (
      <div className={styles.navbar}>
        <a><img src={LogoIcon} className={styles.navbarLogoImg} /></a>
        <div className={styles.nav}>
          <div className={styles.tab}>About Us</div>
          <div className={styles.tab}>Announcement</div>
          <div className={styles.tab}>Project</div>
          <div className={styles.tab}>Sign Up</div>
        </div>
      </div>
    );
  }
}

export default Navigation;
