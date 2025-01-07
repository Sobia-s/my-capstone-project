import React from "react";
import img from '../images/logo-white.png';
import './footer.css';
import { Link } from "react-router-dom";

function Footer(){
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior : 'instant',
        });
    };

    return(
        <>
         <div className="container">
                <div className="section1">
                <img src={img} alt="little lemon logo" width={80} height={130} />
                </div>
                <div className="section2">
                    <h1 className="footer-h1">Navigation</h1>
                    <p className="footer-p"><Link onClick={scrollToTop} to="/">Home</Link></p>
                    <p className="footer-p"><Link onClick={scrollToTop} to="/about">About</Link></p>
                    <p className="footer-p"><Link onClick={scrollToTop} to="/menu">Menu</Link></p>
                    <p className="footer-p"><Link onClick={scrollToTop} to="/reservations">Reservations</Link></p>
                </div>
                <div className="section3">
                    <h1 className="footer-h1">Contact</h1>
                    <p>Address</p>
                    <p>phone number</p>
                    <p>Email</p>
                </div>
         </div>
        </>
    )
}

export default Footer;



