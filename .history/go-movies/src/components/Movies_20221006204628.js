import React, { Component, Fragment } from 'react';

export default class Movies extends Component {
    
    state = { movies: [] };

    componentDidMount() {
        this.setState({
            movies:
        })
    }
    
    render() {
        return (
            <Fragment>
                <h2>Choose Movie</h2>

                <ul>
                    {this.state.movies.map( (m) => (
                        <li key={m.id}>
                            {m.title}
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    }
}