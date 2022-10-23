import React, { Component } from 'react';

export default class EditMovie extends Component {
    state = {
        movie: {},
        isLoaded: false,
        
    }
    render() {
        return (
            <h2>Add Movie</h2>
        );
    }
}