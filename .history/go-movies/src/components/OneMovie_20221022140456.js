import React, { Component, Fragment } from "react";

export default class OneMovie extends Component {
  state = { movie: {}, isLoaded: false, error: null };

  componentDidMount() {
    fetch("http://localhost:4000/v1/movie/" + this.props.match.params.id)
      .then((response) => {
        console.log("Status code is", response.status);
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
            movie: json.movie,
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
    const { movie, isLoaded, error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
    return (
      <Fragment>
        <h2>
          Movie: {this.state.movie.title} {this.state.movie.id}
        </h2>

        <table className="table table-compact table-striped">
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <strong>Title: </strong>
              </td>
              <td>{this.state.movie.title}</td>
            </tr>
            <tr>
              <td>
                <strong>Run Times: </strong>
              </td>
              <td>{this.state.movie.runtime} minutes</td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    );
    
  }
}
