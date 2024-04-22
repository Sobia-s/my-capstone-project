import React from "react";
import Hero from "./Hero"; // Import Hero as default export
import Recipes from './Menu'; // Import Recipes as default export
import Testimonials from './Testimonials'; // Import Testimonials as default export
import About from './About'; // Import About as default export

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

