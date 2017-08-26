import React from 'react';
import { Link } from 'react-router-dom';

const NavButton = (props) => {
    return(
        <li className="nav__button nav__item">
            <Link className="nav__link" to={props.href}><span>{props.linkText}</span></Link>
        </li>
    )
}

export default NavButton;
