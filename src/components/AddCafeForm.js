import React, { Component } from 'react';

import Header from './global/Header';
import base from '../base';

class AddCafeForm extends Component {

    constructor() {
        super();
        this.addCafe = this.addCafe.bind(this);
    }

    state = {
        cafes: {}
    }

    componentWillMount() {
        // this runs right before the <App> is rendered
        this.ref = base.syncState(`/cafes`, {
            context: this,
            state: 'cafes'
        });
    }

    addCafe(cafe) {
        const cafes = {...this.state.cafes};
        const key = cafe.name.split(' ').join('-').toLowerCase();
        cafes[key] = cafe;
        this.setState({ cafes });
    }

    createCafe(event) {
        event.preventDefault();
        const cafe = {
          name: this.name.value,
          description: this.description.value
        }
        this.addCafe(cafe);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="app text-center">
                    <h1 className="heading">Add Your Cafe</h1>

                    <form ref={(input) => this.cafeForm = input} className="cafe-edit" onSubmit={(e) => this.createCafe(e)}>
                        <input ref={(input) => this.name = input} type="text" placeholder="Cafe Name" />
                        <input ref={(input) => this.description = input} type="text" placeholder="Cafe Description" />
                        <button type="submit">+ Add Cafe</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddCafeForm;
