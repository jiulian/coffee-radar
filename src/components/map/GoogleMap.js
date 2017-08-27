import React, { Component } from 'react';

const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBlOTUW8RLuIo6JPM6lHVgUv3Mt5MPaoMM'
});


class GoogleMap extends Component {
    constructor() {
        super();
        this.renderMap = this.renderMap.bind(this);
    }

    render() {
        return (
            <div id={this.props.mapId} className="cafe__map"></div>
        );
    }

    componentDidMount() {
        const mapId = this.props.mapId
            , zoom = this.props.zoom
            , location = this.props.location
            , renderMap = this.renderMap;

        if (location instanceof Object) {
            renderMap(zoom, location, mapId);
        } else {
            googleMapsClient.geocode({
                address: location
            }, function(err, response) {
                if(!err){
                    renderMap(zoom, response.json.results[0].geometry.location, mapId);
                }
            })
        }
    }

    renderMap(zoom, location, mapId) {
        const google = window.google;

        const map = new google.maps.Map(document.getElementById(mapId), {
                zoom: zoom,
                center: location
            });
        new google.maps.Marker({
            position: location,
            map: map
        });
    }
}

export default GoogleMap;
