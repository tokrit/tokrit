import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './js/HomePage/Home';
import About from './js/AboutUs/About';
import Announcement from './js/Announcement/Announcement';
import Navigation from './js/NavigationBar/Navigation';
import LoginPage from './js/LoginPage/LoginPage';
import { PrivateRoute } from './js/PrivateRoute/PrivateRoute';

import './scss/Home.scss';
import './scss/About.scss';
import './scss/Announcement.scss';
import './scss/Home.scss';
import './scss/Navigation.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Navigation isLoggedIn={localStorage.getItem('user')}/>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/" component={Home}/>
            <PrivateRoute path = "/announcement" component={Announcement} />
            <PrivateRoute path = "/about" component={About} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
