import React, { Component } from 'react';

import Header from './global/Header';

class Cafe extends Component {

    state = {
        cafes: {}
    }

    render() {
        return (
            <div>
                <Header />
                <div className="app text-center">
                    <h1 className="heading">{this.props.match.params.cafe}</h1>
                </div>
            </div>
        );
    }
}

export default Cafe;
