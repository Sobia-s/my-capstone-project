
import React from "react";
import img from './images/logo.png';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <>
          <nav className="nav-container">
          <img src={img} alt="logo of little lemon" width={200} height={50} className="logo-container"/>
            <ul className="link-container">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservation">Reservation</Link></li>
                <li><Link to="/reservation">OrderOnline</Link></li>
                {/* <li><Link to="/login">Login</Link></li> */}
            </ul>
         </nav>
        </>
    )
}

export default Nav;
