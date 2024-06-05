import React from "react";
import hero from '../images/restaurantfood.jpg';
import { Link } from "react-router-dom";
import './Hero.css';

function Hero(){
    return(
        <>
        <div className="hero-container">
            <div className="hero1">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="heroP">We are a family owned mediterranean restaurant, focused traditional recipes and served with a modern twist.</p>
                <Link to="/reservations">
                    <button>Reserve a Table</button>
                </Link>
            </div>
            <div className="hero2">
                <img src={hero} alt="recipe pic for hero banner" width={200} height={250} />
            </div>
        </div>
        </>
    )
}

export default Hero;