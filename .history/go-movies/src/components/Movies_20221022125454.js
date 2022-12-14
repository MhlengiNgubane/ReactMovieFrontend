import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Movies extends Component {
  state = {
    movies: [],
    isLoaded: false,
    error: null,
  };

  componentDidMount() {
    fetch("http://localhost:4000/v1/movies")
      // .then((response) => response.json())
      .then((response) => {
        console.log("Status code is", response.status);
        if (response.status !== "200") {
          let err = Error;
          err.message = "Invalid response code: " + response.status;
          this.setState({error: err})
        }
        return response.json();
      })
      .then((json) => {
        this.setState({
          movies: json.movies,
          isLoaded: true,
        },
        (error) => {
          this.setState({
            isLoaded: true
          })
        }
        );
      });
  }

  render() {
    const { movies, isLoaded, error } = this.state;

    if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <Fragment>
          <h2>Choose Movie</h2>

          <ul>
            {movies.map((m) => (
              <li key={m.id}>
                <Link to={`/movies/${m.id}`}>{m.title}</Link>
              </li>
            ))}
          </ul>
        </Fragment>
      );
    }
  }
}
