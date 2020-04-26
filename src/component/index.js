import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Header from './Header'

export default class Header extends Component{
    render(){
        return(
            <header>
        <Router>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/photo">Photo</Link>
            </li>
            <li>
              <Link to="/contacts-book">Contacts book</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/photo">
            <Photo />
          </Route>
          <Route path="/contacts-book">
            <Contacts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
            </header>
        )
    }
}

