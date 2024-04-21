import React from "react";
import img1 from './images/lady1.jpg';
import img2 from './images/male1.jpg';
import img3 from './images/lady2.jpg';
import img4 from './images/lady3.jpg';

export function Testimonials(){
    return(
        <>

        <div id="testimonials-container">
         <h1 id="testimonials-h1">Testimonials</h1>

        <div className="reviews-container">

            <div className="review-card">
                <p className="stars">*****</p>
                <img src={img1} alt="Sarak pic" width={70} height={70} className="cards-img"/>
                <h3>Sarak</h3>
                <p>Sarak62</p>
                <p>“We had such a great time celebrating my grandmothers bitthday!”</p>
            </div>

            <div className="review-card">
                <p className="stars">*****</p>
                <img src={img2} alt="John pic" width={70} height={70} className="cards-img" />
                <h3>John</h3>
                <p>John76</p>
                <p>"Best Feta Salad in town flawless everytime!"</p>
            </div>

            <div className="review-card">
                <p className="stars">*****</p>
                <img src={img3} alt="Sara lopez pic" width={70} height={70} className="cards-img" /> 
                <h3>Sara Lopez</h3>
                <p>Sara72</p>
                <p>"Such a chilled out atmosphere - loved it!"</p>
            </div>

            <div className="review-card">
                <p className="stars">*****</p>
                <img src={img4} alt="Sana pic" width={70} height={70} className="cards-img"/>
                <h3>Sana</h3>
                <p>Sana82</p>
                <p>“Seriously cannot stop thinking about the Turkish Mac n Cheese!!”</p>
            </div>

        </div>
     </div>
      </>
    )
}