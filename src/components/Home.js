import React from "react";
import Hero from "./Banner/Hero";
import Recipes from './Menu/Menu';
import Testimonials from './Testimonials/Testimonials';
import About from './About/About';

function Home(){
    return(
        <>
        <Hero />
        <Recipes />
        <Testimonials />
        <About />
        </>
    )
}

export default Home;

