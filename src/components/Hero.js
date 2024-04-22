import React from "react";
import hero from './images/restaurantfood.jpg';


function Hero(){
    return(
        <>
        <div className="hero-container">
            <div className="hero1">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="heroP">We are a family owned mediterranean restaurant, focused traditional recipes and served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>
            <div className="hero2">
                <img src={hero} alt="recipe pic for hero banner" width={250} height={280} />
            </div>
        </div>
        </>
    )
}

export default Hero;