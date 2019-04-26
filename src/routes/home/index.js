import React, { Component, Fragment } from 'react';

// Images
import LogoIcon from '../../assets/home/tokrit-logo.svg';
import Chevron from '../../assets/home/main-page-chevron.svg';
import siteIcon from '../../assets/home/website-img.svg';
import mobileIcon from '../../assets/home/mobile-img.svg';
import gamesIcon from '../../assets/home/games-img.svg';

// import DesignBg from '../../assets/home/team-section-design-bg.png';
// import WebDevBg from '../../assets/home/team-section-web-bg.png';
// import MobileDevBg from '../../assets/home/team-section-mobile-bg.png';
// import GameDevBg from '../../assets/home/team-section-web-bg.png';

import styles from './index.module.scss';

class Home extends Component {
  render() {
    return (
      <Fragment>
        {/* Header */}
        <div className={styles.headerContainer}>
          <h1 className={styles.mainHeader}>We Design. We Create. We Collaborate</h1>
          <div className={styles.logoContainer}>
            <img src={LogoIcon} className={styles.mainLogoIcon} />
            <h2 className={styles.findOutLink}>FIND OUT MORE ABOUT WHO WE ARE</h2>
            <a href=""><img src={Chevron} className={styles.mainChevron} /></a>
          </div>
        </div>

        {/* Project */}
        <div className={styles.projectContainer}>
          <h1 className={styles.projectHeading}>Our Projects</h1>
          <div className={styles.projectItemContainer}>
            <a href="#" className={styles.projectItemLink}>
              <div className={styles.projectItem}>
                <img src={siteIcon} className={styles.itemIcon}/>
                <p>Website</p>
              </div>
            </a>
            <a href="#" className={styles.projectItemLink}>
              <div className={styles.projectItem}>
                <img src={mobileIcon} className={styles.itemIcon}/>
                <p>Mobile App</p>
              </div>
            </a>
            <a href="#" className={styles.projectItemLink}>
              <div className={styles.projectItem}>
                <img src={gamesIcon} className={styles.itemIcon}/>
                <p>Games</p>
              </div>
              </a>
          </div>
        </div>

        {/* Announcement */}
        <div className={styles.announceContainer}>
          <div className={styles.announceHeader}>This Week's Announcement</div>
          <div className={styles.announceWhiteBox}>
            <div className={styles.announceTextHeader}>SNAKES AND LATTES SOCIAL</div>
            <div className={styles.announceText}>Saturday, April 6, 2019<br/>04:00 PM - 07:00 PM<br/>45Eglinton Ave E, Toronto, ON
            </div>
          </div>
        </div>

        {/* Teams */}
        <div className={styles.teamContainer}>
          <div className={`${styles.teamItemContainer} ${styles.left} ${styles.designerBg}`}>
            <h1>
              Designers
              <hr/>
            </h1>
            <p className={styles.leftText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className={`${styles.teamItemContainer} ${styles.right} ${styles.webdevBg}`}>
            <h1>
              Web Developers
              <hr/>
            </h1>
            <p className={styles.rightText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className={`${styles.teamItemContainer} ${styles.left} ${styles.mobiledevBg}`}>
            <h1>
              Mobile Developers
              <hr/>
            </h1>
            <p className={styles.leftText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className={`${styles.teamItemContainer} ${styles.right} ${styles.gamedevBg}`}>
            <h1>
              Game Developers
              <hr/>
            </h1>
            <p className={styles.rightText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>

        {/* Contact Us */}
        <div className={styles.contactContainer}>
          <div className={styles.contactTextBox}>
            <h2>
              Would you like to work with us?<br/>
              Looking to meet new professionals?<br/>
              Do you have any questions?
            </h2>
            <h1>Let's keep in touch!</h1>
            <div className={styles.button}>Contact Us</div>
          </div>
        </div>

        {/* Footer */}
        <h3 className={styles.footerCopyright}>&#9400; 2019 TOKRIT. All rights reserved.</h3>
      </Fragment>
    );
  }
}

export default Home;
