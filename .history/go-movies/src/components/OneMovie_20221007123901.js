import React, { Component, Fragment} from 'react';

export default class OneMovie extends Component {
    
    state = { movie: {} };

    componentDidMount() {
        this.setState({movie: {
            id: this.props.match.params.id,
            title: "Some Movie",
            run
        }})
    }

    render() {
        return (
            <Fragment>
                <h2>Movie: </h2>
            </Fragment>
        );
    }
}