import React, { Component, Fragment } from 'react';

import LogoIcon from '../../assets/home/tokrit-logo.svg';
import Chevron from '../../assets/home/main-page-chevron.svg';

import styles from './index.module.scss';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.mainPageContainer}>
          <h1 className={styles.mainHeader}>We Design. We Create. We Collaborate</h1>
          <div className={styles.logoContainer}>
            <img src={LogoIcon} className={styles.mainLogoIcon} />
            <h2 className={styles.findOutLink}>FIND OUT MORE ABOUT WHO WE ARE</h2>
            <a href=""><img src={Chevron} className={styles.mainChevron} /></a>
          </div>
        </div>

        {/* Project  */}
        <div className={styles.projectContainer}>
          <div className={styles.projectHeading}>
            <p>Our Projects</p>
          </div>

          <div className={styles.projectItemContainer}>
            <div className={styles.projectItem}>
              <p>Website</p>
            </div>
            <div className={styles.projectItem}>
              <p>Mobile App</p>
            </div>
            <div className={styles.projectItem}>
              <p>Games</p>
            </div>
          </div>

        </div>

      </Fragment>
    );
  }
}

export default Home;
