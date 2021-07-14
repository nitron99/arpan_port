import React, { Component } from 'react';
import './navbar.css';

import {ReactComponent as ReactLogo} from './AD.svg';


class navbar extends Component {
    render(){
        return(
            <div className="navbar">
                <ReactLogo />
                <ul className="navlist">
                    <a href="https://github.com/adasarpan404"  target="_blank" rel="noopener noreferrer" ><li className="navlistitems">Github</li></a>
                    <a href="https://www.facebook.com/arpandas404/"  target="_blank" rel="noopener noreferrer" ><li className="navlistitems">Facebook</li></a>
                    <a href="https://www.linkedin.com/in/arpandas-adasarpan/"  target="_blank" rel="noopener noreferrer" ><li className="navlistitems">LinkedIn</li></a>
                    <a href="https://twitter.com/adasarpan"  target="_blank" rel="noopener noreferrer" ><li className="navlistitems">Twitter</li></a>
                </ul>

                

            </div>
        );
    }
}

export default navbar;