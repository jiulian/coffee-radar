import React, { Component } from 'react';

class CafeCard extends Component {

    render() {
        return (
            <a className="card-link" href="/cafes/cafe-test">
                <div className="card cafe-card card--small card--hover-move">
                    <div className="card__hero">
                        <img className="cafe-card__logo" src="https://pbs.twimg.com/profile_images/688772991061258242/fuzY1MUe_400x400.jpg" alt="Starbuck Logo" />
                    </div>
                    <h2 className="cafe-card__heading">Cafe Coho</h2>
                    <p className="cafe-card__description">Cafe Coho is a small chain of cafes located in brighton.</p>
                </div>
            </a>
        );
    }
}

export default CafeCard;
