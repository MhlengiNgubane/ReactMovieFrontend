import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
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
            </div>  
            </
        );
    }
}