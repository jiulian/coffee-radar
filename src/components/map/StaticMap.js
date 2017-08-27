import React, { Component } from 'react';

class StaticMap extends Component {

    render() {
        return (
            <img className="map-img" alt="map" src="https://maps.googleapis.com/maps/api/staticmap?center=Brighton,UK&zoom=14&size=480x350&maptype=roadmap&scale=2" />
        );
    }
}

export default StaticMap;
