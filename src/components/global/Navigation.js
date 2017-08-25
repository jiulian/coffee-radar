import React from 'react';

import NavButton from './NavButton.js';
import Logo from './Logo';

const Header = () => {
    return(
        <nav className="nav">
            <div className="nav__section">
                <Logo />
                <NavButton href="/map" linkText="Map" />
                <NavButton href="/cafes" linkText="Cafes" />
                <NavButton href="/add" linkText="Add" />
            </div>
        </nav>
    )
}

export default Header;
