import React, { Component } from 'react';

import Header from './global/Header';
import CafeCard from './cafeList/CafeCard';

class CafeList extends Component {

    state = {
        cafes: {}
    }

    render() {
        return (
            <div>
                <Header />
                <div className="app text-center">
                    <h1 className="heading">Choose a Cafe</h1>
                    <div className="card-container card-container">

                        <CafeCard />
                        <CafeCard />
                        <CafeCard />

                    </div>
                </div>
            </div>
        );
    }
}

export default CafeList;
