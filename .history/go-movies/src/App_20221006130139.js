import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
          <div className="col-md-10">
            <Switch>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/movies">
                <Movies />
              </Route>
            </Switch>
          </div>
        </div>
    </Router>
  );
}

function Home() {
  return (
    <h2>Home</h2>
  );
}

function Admin() {
  return (
    <h2>Manage Catalogue</h2>
  );
}

function Movies() {
  return (
    <h2>Movies</h2>
  );
}
