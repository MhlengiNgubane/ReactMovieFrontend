import React, { Component, Fragment } from "react";

export default class EditMovie extends Component {
  state = {
    movie: {},
    isLoaded: false,
    error: null,
  };

  render() {
    let { movie } = this.state;
    return (
      <Fragment>
        <h2>Add/Edit Movie</h2>
        <hr />
        
      </Fragment>
    );
  }
}
