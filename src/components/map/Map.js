import React, { Component } from 'react';

class Map extends Component {

    render() {
        return (
            <div className="card-container card-container">
                <div className="card">
                    <img className="map-img" align="center" alt="map" src="https://maps.googleapis.com/maps/api/staticmap?center=Brighton,UK&zoom=14&size=480x350&maptype=roadmap&scale=2" />
                </div>
            </div>
        );
    }
}

export default Map;
