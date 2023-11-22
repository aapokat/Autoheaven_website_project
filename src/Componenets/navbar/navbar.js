import React from "react";
import './navbar.css';
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll';

const navbar = () => {
    return ( 
        <div className="navbar">
            <div className="loko">
                <img src={Logo} alt="Logo" className="Logo" />
                <h1 className="lokoText">AutoHeaven</h1>
            </div>
            <div className="linkMenu">
                <Link className="linkMenuItem">Etusivu</Link>
                <Link className="linkMenuItem">Tieto</Link>
                <Link className="linkMenuItem">Autopesut</Link>
                <Link className="linkMenuItem">Tuotteet</Link>
                <Link className="linkMenuItem">Ota yhteyttä</Link>
            </div>
        </div>

     );
}
 
export default navbar;
