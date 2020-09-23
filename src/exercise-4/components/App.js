import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Route} from "react-router";
import Home from "./Home";
import User from "./User";
import NotMatch from "./NotMatch";

class App extends Component {
  render() {
    const pathToRegexp = require('path-to-regexp')
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/:user(\d+)' component={User}/>
            <Route exact path='/about' component={User}/>
            <Route component={NotMatch}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
