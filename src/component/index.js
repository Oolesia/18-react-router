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
        <Router>
      <Switch>
          <Route path="/18-react-router/posts">
            <Posts />
          </Route>
          <Route path="/18-react-router/photo">
            <Photo />
          </Route>
          <Route path="/18-react-router/contacts-book">
            <Contacts />
          </Route>
          <Route path="/18-react-router">
            <Home />
          </Route>
        </Switch>
      </Router>
        )
    }
}

