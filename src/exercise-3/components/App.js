import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "./Header";
import Product from "./Product";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Profile from "./Profile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/my-profile' component={Profile}/>
          <Route exact path='/about-us' component={About}/>
          <Route exact path='/products' component={Products}/>
          <Route exact path='/products/:id' component={Product}/>
          <Route exact path='/goods' component={Products}/>
          <Route component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
