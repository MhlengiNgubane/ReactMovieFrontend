import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Movies from './components/Movies';
import Home from './components/Home';
import Admin from './components/Admin';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      
      <div className="container">
        <Navbar />
        <div className="row">
          <h1 className="mt-3">Go Movies</h1>
          <hr className="mb-3"></hr>
        </div>

        <div className="row">
          <div className="col-md-10">
            <Switch>
              <Route path="/movies">
                <Movies />
              </Route>
              
              <Route path="/admin">
                <Admin />
              </Route>
              
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

