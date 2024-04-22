import React from "react";
import chef1 from './images/Chef 1.jpg';


function About(){
    return(
        <>
        <div className="about-container">
            <div className="about-card1">
               <h1 id="about-h1">Little Lemon</h1>
               <h2>Chicago</h2>
               <p>Little Lemon is owned by two italian brothers, Mario and Adrian, who owned to the United States to pursue their shared dream of owning a restaurant.</p>
                <br></br>
                <p>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the mediterranean region.</p>
            </div>
            <div className="about-card2">
             <img src={chef1} alt="portrait of restaurant's chef" width={300} height={290} />
            </div>
        </div>
        </>
    )
}

export default About;