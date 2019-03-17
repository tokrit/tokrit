import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './js/HomePage/Home';
import About from './js/AboutUs/About';
import Announcement from './js/Announcement/Announcement';
import Navigation from './js/NavigationBar/Navigation';

import './css/Home.css';
import './css/About.css';
import './css/Announcement.css'
import './css/Home.css'
import './css/Navigation.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-cover">
          <Navigation />
          <Switch>
            <Route path = "/" component = {Home} exact/>
            <Route path = "/announcement" component = {Announcement} />
            <Route path = "/about" component = {About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
