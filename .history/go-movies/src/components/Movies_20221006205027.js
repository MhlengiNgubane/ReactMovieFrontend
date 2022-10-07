import React, { Component, Fragment } from 'react';

export default class Movies extends Component {
    
    state = { movies: [] };

    componentDidMount() {
        this.setState({
            movies: [
                {id: 1, title: "The Shawshank Redemption", runtime: 142},
                {id: 2, title: "The ", runtime: 142},
                {id: 3, title: "The Shawshank Redemption", runtime: 142}
            ]
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