import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
          <React.Fragment>
            <div className="main-container">
                  <h1>Hackday 1</h1>
                  <p>March, 3rd Sunday</p>
                  <p>350 Victoria St, Toronto, ON M5B 2K3</p>
                  <p>3:00PM ~ 9:PM</p>
            </div>
            <div className="button-container">
              <button className="button" onClick={this.handleClick}>
                MORE
              </button>
            </div>
          </React.Fragment>
        );
    }
}

export default Home;
