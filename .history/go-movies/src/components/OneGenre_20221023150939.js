import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';

export default class OneGenre extends Component {

  render() {
    
      return (
        <Fragment>
          <h2>
            Movie: {movie.title} ({movie.year})
          </h2>

          <div className="float-start">
            <small>Rating: {movie.mpaa_rating}</small>
          </div>
          <div className="float-end">
            {movie.genres.map((m, index) => (
              <span className="badge bg-secondary me-1" key={index}>
                {m}
              </span>
            ))}
          </div>
          <div className="clearfix"></div>

          <hr />

          <table className="table table-compact table-striped">
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <strong>Title: </strong>
                </td>
                <td>{movie.title}</td>
              </tr>
              <tr>
                <td>
                  <strong>Description: </strong>
                </td>
                <td>{movie.description}</td>
              </tr>
              <tr>
                <td>
                  <strong>Run Times: </strong>
                </td>
                <td>{movie.runtime} minutes</td>
              </tr>
            </tbody>
          </table>
        </Fragment>
      );
    }
  }
}