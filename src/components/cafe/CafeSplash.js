import React, { Component } from 'react';

class CafeSplash extends Component {

    render() {
        return (
            <div className="cafe__splash">
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default CafeSplash;
