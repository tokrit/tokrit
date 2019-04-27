import React, { Component, Fragment } from 'react';

import styles from './index.module.scss';

// Images
import ItLogoIcon from '../../assets/announcement/it-logo.svg';
import profileImage from '../../assets/announcement/profile.png';

class Announcement extends Component {
  render() {
    return (
      <Fragment>
          {/* Announcement Header Section */}
          <div className={styles.announcementHeadContainer}>
            <div className={styles.announcementPageHeader}>
              <h1>
                Toronto-based<br/>
                Young<br/>
                <img src={ItLogoIcon} className={styles.logoIcon} />Professionals
              </h1>
              <hr/>
            </div>
          </div>

          {/* Announcement Events Section */}
          <div className={styles.upcomingEventContainer}>
            <h1 className={styles.upcomingEventHeader}>Announcement</h1>

            {/* Most Recent Event Box */}
            <div className={styles.latestEventBox}>
              <h1>UPCOMING EVENT<hr/></h1>
              <div className={styles.eventProfile}>
                <div className={styles.profileImageContainer}>
                  <img src={profileImage} className={styles.profileImageIcon} />
                  <p>Jina</p>
                </div>
                <div className={styles.eventContentBox}>
                  <h2>Hackday 4 <span>April 14, 2019</span></h2>
                  <p>350 Victoria St, Toronto, ON M5B 2K3</p>
                </div>
              </div>
              <button className={styles.eventButton}>RSVP</button>
            </div>

            {/* List of upcoming events */}
            <div className={styles.eventBoxesContainer}>
              <div className={styles.eventBox}>
                  <div className={styles.eventProfile}>
                      <div className={styles.profileImageContainer}>
                          <img src={profileImage} className={styles.profileImageIcon} />
                          <p>Jina</p>
                      </div>
                      <div className={styles.eventContentBox}>
                          <h2>Hackday 3 <span>April 14, 2019</span></h2>
                          <p>350 Victoria St, Toronto, ON M5B 2K3</p>
                      </div>
                  </div>
              </div>

              <div className={styles.eventBox}>
                  <div className={styles.eventProfile}>
                      <div className={styles.profileImageContainer}>
                          <img src={profileImage} className={styles.profileImageIcon} />
                          <p>Jina</p>
                      </div>
                      <div className={styles.eventContentBox}>
                          <h2>Hackday 2 <span>March 31, 2019</span></h2>
                          <p>350 Victoria St, Toronto, ON M5B 2K3</p>
                      </div>
                  </div>
              </div>

              <div className={styles.eventBox}>
                  <div className={styles.eventProfile}>
                      <div className={styles.profileImageContainer}>
                          <img src={profileImage} className={styles.profileImageIcon} />
                          <p>Jina</p>
                      </div>
                      <div className={styles.eventContentBox}>
                          <h2>CHI-MC <span>March 17, 2019</span></h2>
                          <p>350 Victoria St, Toronto, ON M5B 2K3</p>
                      </div>
                  </div>
              </div>

              <div className={styles.eventBox}>
                  <div className={styles.eventProfile}>
                      <div className={styles.profileImageContainer}>
                          <img src={profileImage} className={styles.profileImageIcon} />
                          <p>Jina</p>
                      </div>
                      <div className={styles.eventContentBox}>
                          <h2>Hackday 1<span>March 10, 2019</span></h2>
                          <p>350 Victoria St, Toronto, ON M5B 2K3</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </Fragment>
    );
  }
}

export default Announcement;