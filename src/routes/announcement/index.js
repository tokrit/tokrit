import React, { Component } from 'react';

import styles from './index.module.scss';

// Images
import ItLogoIcon from '../../assets/announcement/it-logo.svg';
import profileImage from '../../assets/announcement/profile.png';

class Announcement extends Component {
    render() {
        return (
            <div>
                {/* Announcement main container */}
                <div className={styles.announcementPageContainer}>
                    <div className={styles.announcementPageHeader}>
                        <p>Toronto-based</p>
                        <p>Young</p>
                        <p><img src={ItLogoIcon} className={styles.logoIcon} />Professionals</p>
                    </div>
                </div>

                <div className={styles.upcomingEventContainer}>
                    <h1 className={styles.upcomingEventHeader}>Announcement</h1>
                    
                    {/* Announcement first upcoming event box */}
                    <div className={styles.eventBox}>
                        <h1>UPCOMING EVENT</h1>

                        <div className={styles.eventProfile}>
                            <div className={styles.profileImageContainer}>
                                <img src={profileImage} className={styles.profileImageIcon} />
                                <p>Jina</p>
                            </div>
                            <div className={styles.eventContentBox}>
                                <h2>Hackday 4<span>April 14, 2019</span></h2>
                                <p>350 Victoria St, Toronto, ON M5B 2K3</p>
                            </div>
                        </div>

                        <button className={styles.eventButton}>RSVP</button>
                    </div>

                    {/* Announcement second upcoming event box */}
                    <div className={styles.multiEventBox}>
                        <div className={styles.announceEventItems}>
                            <div className={styles.eventProfile}>
                                <div className={styles.profileImageContainer}>
                                    <img src={profileImage} className={styles.profileImageIcon} />
                                    <p>Jina</p>
                                </div>
                                <div className={styles.eventContentBox}>
                                    <h2>Hackday 3<span>April 14, 2019</span></h2>
                                    <p>350 Victoria St, Toronto, ON M5B 2K3</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.announceEventItems}>
                            <div className={styles.eventProfile}>
                                <div className={styles.profileImageContainer}>
                                    <img src={profileImage} className={styles.profileImageIcon} />
                                    <p>Jina</p>
                                </div>
                                <div className={styles.eventContentBox}>
                                    <h2>Hackday 2<span>March 31, 2019</span></h2>
                                    <p>350 Victoria St, Toronto, ON M5B 2K3</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.announceEventItems}>
                            <div className={styles.eventProfile}>
                                <div className={styles.profileImageContainer}>
                                    <img src={profileImage} className={styles.profileImageIcon} />
                                    <p>Jina</p>
                                </div>
                                <div className={styles.eventContentBox}>
                                    <h2>CHI-MC<span>March 17, 2019</span></h2>
                                    <p>350 Victoria St, Toronto, ON M5B 2K3</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.announceEventItems}>
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
            </div>
        );
    }
}

export default Announcement;