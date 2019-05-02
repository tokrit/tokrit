import React, { Component, Fragment } from 'react';

import styles from './index.module.scss';

// Images
import ItLogoIcon from '../../assets/project/tokrit-logo.svg';

class Project extends Component {
    render() {
        return (
            <Fragment>
            {/* Header */}
            <section className={styles.projectPageMain}>
                <header>
                    <h1>
                    Toronto-based<br/>
                    Young IT Professionals
                    </h1>
                    <h2><img src={ItLogoIcon} alt="tokrit"/></h2>
                </header>
            </section>
            {/* Content */}
            <section className={styles.projectPageContent}>
                <h3>Project</h3>
                <section className={styles.projectPageContentSubHeader}>This is what we do. Please take a look and give us any comments! We’d love to hear from you.</section>
                <section className={styles.projectPageContentServices}>
                    <a href="#">
                        <header></header>
                        <section>Toronto, Canada</section>
                    </a>
                    <a href="#">
                        <header></header>
                        <section>Toronto, Canada</section>
                    </a>
                    <a href="#">
                        <header></header>
                        <section>Toronto, Canada</section>
                    </a>

                    <a href="#">
                        <header></header>
                        <section>Toronto, Canada</section>
                    </a>
                    <a href="#">
                        <header></header>
                        <section>Toronto, Canada</section>
                    </a>
                    <a href="#">
                        <header></header>
                        <section>Toronto, Canada</section>
                    </a>

                    <a href="#">
                        <header></header>
                        <section>Toronto, Canada</section>
                    </a>
                    <a href="#">
                        <header></header>
                        <section>Toronto, Canada</section>
                    </a>
                    <a href="#">
                        <header></header>
                        <section>Toronto, Canada</section>
                    </a>
                </section>

                <section className={styles.projectPageContentFooter}>Send us a message if you liked our work. Let’s talk about collaboration!</section>
                <button className={styles.projectPageContentBtn}>Send us a message</button>
            </section>
            </Fragment>
        );
    }
}

export default Project;