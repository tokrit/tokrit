import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Button } from 'reactstrap';
import Home from './components/Home';
import About from './components/About';
import Announcement from './components/Announcement';
import Menu from './components/Menu';
import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path = "/" component = {Home} exact/>
            <Route path = "/announcement" component = {Announcement} />
            <Route path = "/about" component = {About} />
            <Route path = "/menu" component = {Menu} />
            <Route component = {Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
