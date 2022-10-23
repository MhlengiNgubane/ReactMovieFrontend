import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class OneGenre extends Component {
    state = {
        movies: [],
        isLoaded,
        error: null,
    }

    componentDidMount() {
        fetch("http://localhost:4000/v1/movies/" + this.props.match.params.id)
          .then((response) => {
            if (response.status !== "200") {
              let err = Error;
              err.message = "Invalid response code: " + response.status;
              this.setState({ error: err });
            }
            return response.json();
          })
          .then((json) => {
            this.setState(
              {
                movies: json.movies,
                isLoaded: true,
              },
              (error) => {
                this.setState({
                  isLoaded: true,
                  error,
                });
              }
            );
          });
      }

  render() {
    return <Fragment></Fragment>;
  }
}
