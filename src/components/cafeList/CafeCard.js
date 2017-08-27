import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CafeCard extends Component {

    render() {
        const href = "/cafes/" + this.props.index;
        const { details } = this.props;

        return (
            <Link className="card-link" to={href}>
                <div className="card cafe-card card--small card--hover-move">
                    <div className="card__hero">
                        <img className="cafe-card__logo" src="https://pbs.twimg.com/profile_images/688772991061258242/fuzY1MUe_400x400.jpg" alt="Starbuck Logo" />
                    </div>
                    <h2 className="cafe-card__heading">{details.name}</h2>
                    <p className="cafe-card__description">{details.description}</p>
                </div>
            </Link>
        );
    }
}

export default CafeCard;
