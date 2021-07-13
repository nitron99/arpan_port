import React, { Component } from 'react';
import './navbar.css';

import {ReactComponent as ReactLogo} from './AD.svg';


class navbar extends Component {
    render(){
        return(
            <div className="navbar">
                <ReactLogo />
                <ul className="navlist">
                    <li className="navlistitems">Github</li>
                    <li className="navlistitems">Facebook</li>
                    <li className="navlistitems">LinkedIn</li>
                    <li className="navlistitems">Twitter</li>
                </ul>

                <h1>WM</h1>

            </div>
        );
    }
}

export default navbar;