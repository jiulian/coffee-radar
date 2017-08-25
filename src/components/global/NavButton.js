import React from 'react';

const NavButton = (props) => {
    return(
        <li className="nav__button nav__item">
            <a className="nav__link" href={props.href}><span>{props.linkText}</span></a>
        </li>
    )
}

export default NavButton;
