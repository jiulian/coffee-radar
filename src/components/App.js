import React, { Component } from 'react';

import Header from './global/Header';
import GoogleMap from './map/GoogleMap';
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
                            <div id="main-map">
                                <GoogleMap mapId="main-map" zoom={14} location="Brighton, UK"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
