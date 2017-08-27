import React, { Component } from 'react';

import Header from './global/Header';
import StaticMap from './map/StaticMap';
import base from '../base';

class App extends Component {

    state = {
        cafes: {}
    }

    componentWillMount() {
        this.ref = base.syncState(`/cafes`, {
            context: this,
            state: 'cafes'
        });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="app text-center ">
                    <h1 className="heading">Find a Cafe</h1>

                    <div className="card-container container">
                        <div className="card">
                            <StaticMap />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
