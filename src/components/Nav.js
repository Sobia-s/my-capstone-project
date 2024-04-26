
import React from "react";
import img from './images/logo.png';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <>
          <nav className="nav-container">
          <Link to="/">
                <img src={img} alt="logo of little lemon" width={200} height={50} className="logo-container" />
            </Link>
            <ul className="link-container">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/reservations">OrderOnline</Link></li>
            </ul>
         </nav>
        </>
    )}

export default Nav;
