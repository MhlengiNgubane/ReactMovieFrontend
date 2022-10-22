import React, { Component } from 'react';


export default class Genres extends Component {

    state = {
        genres: [],
        isLoaded: false,
        error: null,
    }
    

    render() {
        return (
            <h2>Genres</h2>
        );
    }
}