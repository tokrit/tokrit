import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './js/HomePage/Home';
import About from './js/AboutUs/About';
import Announcement from './js/Announcement/Announcement';
import Navigation from './js/NavigationBar/Navigation';
import LoginPage from './js/LoginPage/LoginPage';

import './scss/Home.scss';
import './scss/About.scss';
import './scss/Announcement.scss'
import './scss/Home.scss'
import './scss/Navigation.scss'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-cover">
          <Navigation />
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path = "/announcement" component = {Announcement} />
            <Route path = "/about" component = {About} />
            <Route path = "/" component = {Home} exact/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
