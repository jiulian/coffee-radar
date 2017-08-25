import React, { Component } from 'react';

import Header from './global/Header';

class NotFound extends Component {
  render() {
    return (
    <div>
        <Header />
        <div className="App">
            <h2>Oops, wrong page!</h2>
        </div>
    </div>
    );
  }
}

export default NotFound;
