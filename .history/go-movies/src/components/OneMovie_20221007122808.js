import React, { Component} from 'react';

export default class OneMovie extends Component {
    render() {
        return <h2>Category: {this.props.title}</h2>
    }
}