import React, { Component } from 'react';

import LogoIcon from '../../assets/home/tokrit-logo.svg';
import Chevron from '../../assets/home/main-page-chevron.svg';

import styles from './index.module.scss';

class Home extends Component {
  render() {
    return(
      <div className={styles.mainPageContainer}>
        <h1 className={styles.mainHeader}>We Design. We Create. We Collaborate</h1>
        <div className={styles.logoContainer}>
          <img src={LogoIcon} className={styles.mainLogoIcon} />
          <h2 className={styles.findOutLink}>FIND OUT MORE ABOUT WHO WE ARE</h2>
          <a href=""><img src={Chevron} className={styles.mainChevron} /></a>
        </div>
      </div>
    );
  }
}

export default Home;
