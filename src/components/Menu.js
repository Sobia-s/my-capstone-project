import React from "react";
import { Link } from "react-router-dom";
import dish1 from './images/greek salad.jpg';
import dish2 from './images/Bruscheta.jpg';
import dish3 from './images/lemon dessert.jpg';


function Specials(){
    return(
        <>
         <div className="specials-heading">
            <div>
                <h2 id="special">This weeks specials!</h2>
            </div>
            <div>
               <Link to="/reservations">
               <button id="special2">Order Online</button>
               </Link>
               
            </div>
         </div>

         <div className="dishes-container">
            <div className="dish">
               <img src={dish1} alt="greek salad" width={280} height={200}/>
               <div className="img-heading">
                <h2>Greek Salad <span>$12.99</span></h2>
               </div>
               <p>The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese garnished with...</p>
               <Link to="/reservations" className="delivery-link">
               <h4>Order a delivery</h4>
               </Link>
            </div>

            <div>
            <div className="dish">
               <img src={dish2} alt="Bruschetta" width={280} height={200} />
               <div className="img-heading">
                <h2>Bruschetta <span>$ 5.99</span></h2>
               </div>
               <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
               <Link to="/reservations" className="delivery-link">
               <h4>Order a delivery</h4>
               </Link>
            </div>
            </div>

            <div>
            <div className="dish">
               <img src={dish3} alt="Lemon Dessert" width={280} height={200}/>
               <div className="img-heading">
                <h2>Lemon Dessert <span>$ 5.00</span></h2>
               </div>
               <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
               <Link to="/reservations" className="delivery-link">
               <h4>Order a delivery</h4>
               </Link>
            </div>
            </div>
         </div>
        </>
    )
}


export default Specials;