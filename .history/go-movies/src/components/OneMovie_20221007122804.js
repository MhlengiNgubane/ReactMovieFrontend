import React, { Component} from 'react';

export default class One extends Component {
    render() {
        return <h2>Category: {this.props.title}</h2>
    }
}