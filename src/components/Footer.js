import React from "react";
import img from './images/restaurant.jpg';

export function Footer(){
    return(
        <>
         <div className="footer-container">

            <div className="footer-1">
                <img src={img} alt="restaurant pic" width={180} height={280} />
                <div className="footer-links">
                <h1>Doormat</h1>
                <h1>Navigation</h1>
                <p>Home</p>
                <p>About</p>
                <p>Menu</p>
                <p>Reservation</p>
                <p>Order Online</p>
                <p>Login</p>
                </div>
            </div>

            <div className="footer-2">
                <div className="footer-links">
                <h1>Contact</h1>
                <p>Adress</p>
                <p>phone number</p>
                <p>email</p>
                </div>

                <div className="footer-links">
                    <h1>Social Media Links</h1>
                    <p>Adress</p>
                    <p>phone number</p>
                    <p>email</p>
                </div>
            </div>
         </div>
        </>
    )
}