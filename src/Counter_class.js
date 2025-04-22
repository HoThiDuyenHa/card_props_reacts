import React, { Component } from 'react';

export class Counter_class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increase = () => {
        this.setState({ count: this.state.count + 1});
    };

    render() {
        return (
            <div>
                <h1>Gia tri: {this.state.count}</h1>
                <button onClick={this.increase}>tang</button>
            </div>
        );
    }
}

export default Counter_class;
