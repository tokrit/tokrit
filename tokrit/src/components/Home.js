import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
                <div>
                <Jumbotron>
                  <h1 className="display-3">Hackday 1</h1>
                  <p>March, 3rd Sunday</p>
                  <p>350 Victoria St, Toronto, ON M5B 2K3</p>
                  <p>3:00PM ~ 9:PM</p>

                  <div className="lead text-center">
                    <Button color="primary" href = "announcement">MORE</Button>
                  </div>
                </Jumbotron>
              </div>
        );
    }
}

export default Home;