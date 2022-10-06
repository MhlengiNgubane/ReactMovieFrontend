import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Go Movies</h1>
          <hr className="mb-3"></hr>
        </div>

        <div className="row">
          <div className="col-mb-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin">Manage Catalogue</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-10">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/admin" component={Admin} />
              <Route path="/movies"
            </Switch>
          </div>
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
