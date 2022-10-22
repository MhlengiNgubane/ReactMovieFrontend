import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

export default class Movies extends Component {
    
    state = { 
        movies: [], 
        isLoaded: false,
    };

    componentDidMount() {
        fetch("http://localhost:4000/v1/movies")
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    movies: json.movies,
                    isLoaded: true,
                })
            })
    }
    
    render() {
        const { movies, isLoaded }
        return (
            <Fragment>
                <h2>Choose Movie</h2>

                <ul>
                    {this.state.movies.map( (m) => (
                        <li key={m.id}>
                            <Link to={`/movies/${m.id}`}>{m.title}</Link>
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    }
}