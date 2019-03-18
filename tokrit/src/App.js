import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PrivateRoute } from './js/PrivateRoute/PrivateRoute';

import './scss/Home.scss';
import './scss/About.scss';
import './scss/Announcement.scss';
import './scss/Home.scss';
import './scss/Navigation.scss';

import Home from './routes/HomePage/Home';
import About from './routes/AboutUs/About';
import Announcement from './routes/Announcement/Announcement';
import Login from './routes/LoginPage/LoginPage';

import Navigation from './components/NavigationBar/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Navigation isLoggedIn={localStorage.getItem('user')}/>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Home}/>
            <PrivateRoute path = "/announcement" component={Announcement} />
            <PrivateRoute path = "/about" component={About} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
