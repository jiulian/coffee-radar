import React, { Component } from 'react';

import Header from './global/Header';
import Map from './map/Map';

class App extends Component {

    state = {
        cafes: {}
    }

    render() {
        return (
            <div>
                <Header />
                <div className="app text-center">
                    <h1 className="heading">Find a Cafe</h1>
                    <Map />
                </div>
            </div>
        );
    }
}

export default App;
