import React, { Component } from 'react';

import Header from './global/Header';
import CafeCard from './cafeList/CafeCard';
import base from '../base';

class CafeList extends Component {

    constructor() {
        super();
        this.renderCafes = this.renderCafes.bind(this);
    }

    state = {
        cafes: {}
    }

    componentWillMount() {
        this.ref = base.syncState(`/cafes`, {
            context: this,
            state: 'cafes'
        });
    }

    renderCafes(key) {
        return (
            <CafeCard key={key} index={key} details={this.state.cafes[key]} />
        );
    }

    render() {
        return (
            <div>
                <Header />
                <div className="app text-center">
                    <h1 className="heading">Choose a Cafe</h1>
                    <div className="card-container container">
                        { Object.keys(this.state.cafes).map(this.renderCafes)}
                    </div>
                </div>
            </div>
        );
    }
}

export default CafeList;
