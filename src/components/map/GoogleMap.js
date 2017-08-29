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
            <div id={this.props.mapId} className="map"></div>
        );
    }

    componentDidMount() {
        const mapId = this.props.mapId
            , zoom = this.props.zoom ? this.props.zoom : 15
            , location = this.props.location ? this.props.location : "Brighton, UK"
            , draggable = this.props.draggable ? this.props.draggable : false
            , renderMap = this.renderMap
            , droppedMarker = this.props.droppedMarker ? this.props.droppedMarker : false;

        if (location instanceof Object) {
            renderMap(zoom, location, mapId);
        } else {
            googleMapsClient.geocode({
                address: location
            }, function(err, response) {
                if(!err){
                    renderMap(zoom, response.json.results[0].geometry.location, mapId, draggable, droppedMarker);
                }
            })
        }
    }

    renderMap(zoom, location, mapId, draggable, droppedMarkerFunction) {
        const google = window.google;

        const map = new google.maps.Map(document.getElementById(mapId), {
                zoom: zoom,
                center: location
            }),
        marker = new google.maps.Marker({
            position: location,
            map: map,
            draggable:draggable
        });
        if(droppedMarkerFunction) {
            marker.addListener('dragend', function() {
                droppedMarkerFunction(this.position.lat(), this.position.lng());
            })
        }
    }
}

export default GoogleMap;
