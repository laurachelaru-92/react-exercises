import React from 'react';
import { Link } from "react-router-dom";


function NavigationMenu(props) {
    return (
        <div>
            <span>Menu</span>
            <ul>
                <li>
                    <Link
                        to="/"
                        className="app-link"
                        onClick={props.closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className="app-link"
                        onClick={props.closeMenu}
                    >
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu;