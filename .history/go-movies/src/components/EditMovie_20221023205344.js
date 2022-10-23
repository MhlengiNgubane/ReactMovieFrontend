import React, { Component } from 'react';

export default class EditMovie extends Component {
    state = {
        movie: {},
        isLoaded: false,
        error: null,
    }
    render() {
        return (
            <h2>Add Movie</h2>
        );
    }
}