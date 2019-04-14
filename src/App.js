import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './routes/home/index';
import About from './routes/about/index';
import Announcement from './routes/announcement/index';
import Login from './routes/login/index';
import Navigation from './components/navigation-bar/index';
//import { PrivateRoute } from './routes/private-route/index';

import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="siteContainer">
          <Navigation isLoggedIn={localStorage.getItem('user')} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/announcement" component={Announcement} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
