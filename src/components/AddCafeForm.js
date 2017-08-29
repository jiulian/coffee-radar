import React, { Component } from 'react';

import Header from './global/Header';
import base from '../base';
import GoogleMap from './map/GoogleMap';

class AddCafeForm extends Component {

    constructor() {
        super();
        this.addCafe = this.addCafe.bind(this);
        this.createCafe = this.createCafe.bind(this);
        this.updateLocation = this.updateLocation.bind(this);
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
            name: this.refs.name.value,
            description: this.refs.description.value,
            address: {
                address1: this.refs.address1.value,
                address2: this.refs.address2.value,
                city: this.refs.city.value,
                postcode: this.refs.postcode.value
            },
            markerPosition: {
                lat: parseFloat(this.refs.latitude.value),
                lng: parseFloat(this.refs.longitude.value)
            }
        }

        this.refs.name.value = "";
        this.refs.description.value = "";
        this.refs.address1.value = "";
        this.refs.address2.value = "";
        this.refs.city.value = "";
        this.refs.postcode.value = "";

        this.addCafe(cafe);
    }

    updateLocation(latitude, longitude) {
        this.refs.latitude.value = latitude;
        this.refs.longitude.value = longitude;
    }

    render() {
        return (
            <div>
                <Header />
                <div className="app text-center">
                    <div className="container container--column">
                        <h1 className="heading">Add Your Cafe</h1>
                        <form ref={(input) => { this.cafeForm = input; }} className="cafe-edit" onSubmit={(e) => this.createCafe(e)}>
                            <div className="form-group form-group--row">
                                <div className="form-control">
                                    <label>Cafe Name</label>
                                    <input ref="name" type="text" placeholder="Cafe Name" />
                                </div>

                                <div className="form-control">
                                    <label>Short Description</label>
                                    <input ref="description" type="text" placeholder="Short Description" />
                                </div>
                            </div>

                            <hr />

                            <div className="form-group form-group--column">
                                <div className="form-control">
                                    <label>Address Line 1*</label>
                                    <input ref="address1" type="text" placeholder="Address 1" />
                                </div>

                                <div className="form-control">
                                    <label>Address Line 2</label>
                                    <input ref="address2" type="text" placeholder="Address 2" />
                                </div>

                                <div className="form-control">
                                    <label>City*</label>
                                    <input ref="city" type="text" placeholder="City" />
                                </div>

                                <div className="form-control">
                                    <label>Postcode*</label>
                                    <input ref="postcode" type="text" placeholder="Postcode" />
                                </div>
                            </div>

                            <hr />

                            <label>Drag marker to choose location of Cafe</label>
                            <GoogleMap
                                mapId="add-cafe-map"
                                zoom={15}
                                location="Brighton, UK"
                                draggable={true}
                                droppedMarker={this.updateLocation}/>
                            <input ref="latitude" type="hidden" placeholder="Latitude" />
                            <input ref="longitude" type="hidden" placeholder="Longitude" />

                            <button type="submit">+ Add Cafe</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddCafeForm;
