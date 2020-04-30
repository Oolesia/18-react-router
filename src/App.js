import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Layout from './component/layout';
import {routes} from './routes.js'
import './reset.css'


export default function App() {
  return (
    <Router>
    <Layout>
      <Switch>
        {
          routes.map(route => (
            <Route exact={route.exact} key={route.toString()} path={route.path}>
            {route.comonents}
            </Route>
          ))
        }
        </Switch>
    </Layout>
    </Router>
  );
}
