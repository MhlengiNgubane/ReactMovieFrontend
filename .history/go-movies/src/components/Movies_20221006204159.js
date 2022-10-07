import React, { Component, Fragment } from 'react';

export default class Movies extends Component {
    
    state = { movies: []};
    
    render() {
        return (
            <Fragment>
                <h2>Choose Movie</h2>

                <ul>
                    {this.state.movies.map}
                </ul>
            </Fragment>
        );
    }
}