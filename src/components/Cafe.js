import React, { Component } from 'react';

import Header from './global/Header';
import base from '../base';
import CafeSplash from './cafe/CafeSplash';
import GoogleMap from './map/GoogleMap';

class Cafe extends Component {

    state = {
        cafe: {}
    }

    componentWillMount() {
        // this runs right before the <App> is rendered
        this.ref = base.syncState(`/cafes/${this.props.match.params.cafe}`, {
            context: this,
            state: 'cafe'
        });
    }

    render() {
        const mapId = this.props.match.params.cafe + '-map';
        let map = '';

        if(this.state.cafe.address) {
            let location = '';
            for (let key in this.state.cafe.address) {
                location += this.state.cafe.address[key] + ', ';
            }

            map = <GoogleMap
                    mapId={mapId}
                    zoom={15}
                    location={this.state.cafe.markerPosition}
                    draggable={false} />
        }

        return (
            <div>
                <Header />
                <div className="app text-center cafe">
                    <CafeSplash name={this.state.cafe.name}/>
                    <div className="container">
                        {map}
                        <div className="cafe__description">
                            {this.state.cafe.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cafe;
