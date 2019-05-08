import React, { Component, Fragment } from 'react';

import styles from './index.module.scss';

// Images
import ItLogoIcon from '../../assets/about/it-logo.svg';
import DesignIcon from '../../assets/about/design_icon.svg';
import FrontEndIcon from '../../assets/about/front-end_icon.svg';
import BackEndIcon from '../../assets/about/back-end_icon.svg';
import CareerIcon from '../../assets/about/icon-career.svg';
import SocialIcon from '../../assets/about/icon-social.svg';
import HackDayIcon from '../../assets/about/icon-hackday.svg';
import TutorialIcon from '../../assets/about/icon-tutorial.svg';

class About extends Component {
    render() {
        return (
            <Fragment>
                {/* About Header Section */}
                <div className={styles.aboutHeadContainer}>
                    <div className={styles.aboutPageHeader}>
                        <h1>
                            Toronto-based<br />
                            Young<br />
                            <img src={ItLogoIcon} className={styles.logoIcon} />Professionals
                        </h1>
                    </div>
                </div>

                {/* What We Do Section */}
                <div className={styles.whatWeDoContainer}>
                    <h2>What We Do</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.</p>
                </div>

                {/* Position Items Section */}
                <div className={styles.positionContainer}>
                    <div className={styles.positionItems}>
                        {/* Position Items Icons */}
                        <div className={styles.positionItemsIconBox}>
                            <img src={DesignIcon} />
                        </div>

                        {/* Position Items Roles */}
                        <div className={styles.positionRoles}>
                            <h3>DESIGN</h3>
                            <p>Sketch</p>
                            <p>InVision</p>
                            <p>Adobe Xd</p>
                            <p>Adobe Illustrator</p>
                            <p>Adobe Photoshop</p>
                        </div>
                    </div>

                    <div className={styles.positionItems}>
                        <div className={styles.positionItemsIconBox}>
                            <img src={FrontEndIcon} />
                        </div>

                        <div className={styles.positionRoles}>
                            <h3>FRONT-END</h3>
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>JavaScript</p>
                            <p>React.js</p>
                        </div>
                    </div>

                    <div className={styles.positionItems}>
                        <div className={styles.positionItemsIconBox}>
                            <img src={BackEndIcon} />
                        </div>

                        <div className={styles.positionRoles}>
                            <h3>BACK-END</h3>
                            <p>MySQL</p>
                            <p>Node.js</p>
                            <p>Heroku</p>
                        </div>
                    </div>
                </div>

                {/* Activity Section */}
                <div className={styles.activityContainer}>

                    <h2>Activities</h2>

                    <div className={styles.activityItemsBox}>
                        
                        <div className={styles.activityItems}>
                            <div className={styles.activityItemsIcon}>
                                <img src={HackDayIcon} />
                            </div>
                            
                            <div className={styles.activityItemsLabel}>HACK-DAY</div>
                        </div>

                        <div className={styles.activityItems}>
                            <div className={styles.activityItemsIcon}>
                                <img src={TutorialIcon} />
                            </div>
                            
                            <div className={styles.activityItemsLabel}>TUTORIALS</div>
                        </div>

                        <div className={styles.activityItems}>
                            <div className={styles.activityItemsIcon}>
                                <img src={CareerIcon} />
                            </div>
                            
                            <div className={styles.activityItemsLabel}>CAREER BUILDING</div>
                        </div>

                        <div className={styles.activityItems}>
                            <div className={styles.activityItemsIcon}>
                                <img src={SocialIcon} />
                            </div>
                            
                            <div className={styles.activityItemsLabel}>SOCIAL</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default About;