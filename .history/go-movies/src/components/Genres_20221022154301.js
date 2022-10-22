import React, { Component } from 'react';


export default class Genres extends Component {

    state = {
        genres: [],
        isLoaded: false,
        error: null,
    }

    componentDidMount() {
        fetch("http://localhost:4000/v1/")
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
        return (
            <h2>Genres</h2>
        );
    }
}