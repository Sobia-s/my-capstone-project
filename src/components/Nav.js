import React from "react";
import img from './images/logo.png';

export function Nav(){
    return(
        <>
          <nav className="nav-container">
            <img src={img} alt="logo of little lemon" width={200} height={50} className="logo-container"/>
            <ul className="link-container">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservation</a></li>
                <li><a href="">OrderOnline</a></li>
                <li><a href="">Login</a></li>
            </ul>
         </nav>
        </>
    )
}