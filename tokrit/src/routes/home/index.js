import React, { Component } from 'react';

import styles from './index-module.css';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.mainCover}>
          <div className={styles.mainContainer}>
                <h1>Hackday 1</h1>
                <p>March, 3rd Sunday</p>
                <p>350 Victoria St, Toronto, ON M5B 2K3</p>
                <p>3:00PM ~ 9:PM</p>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={this.handleClick}>
              MORE
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
