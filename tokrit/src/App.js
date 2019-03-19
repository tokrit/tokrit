import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './routes/home/index';
import About from './routes/about/index';
import Announcement from './routes/announcement/index';
import Login from './routes/login/index';
import { PrivateRoute } from './routes/private-route/index';

import Navigation from './components/navigation-bar/index';

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
