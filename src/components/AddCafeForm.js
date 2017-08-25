import React, { Component } from 'react';

import Header from './global/Header';

class AddCafeForm extends Component {

    state = {
        cafes: {}
    }

    render() {
        return (
            <div>
                <Header />
                <div className="app text-center">
                    <h1 className="heading">Add Your Cafe</h1>
                </div>
            </div>
        );
    }
}

export default AddCafeForm;
