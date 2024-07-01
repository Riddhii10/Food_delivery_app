// route page on logging as a restaurant

"use client";
import { useState } from "react";

import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";
import RestaurantHeader from "../_components/RestaurantHeader";
import './style.css'
import Footer from "../_components/Footer";
const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
    <div className="container">
      <RestaurantHeader/>
      <h1>Restaurant Login/Sign-up Page </h1>
      {login ? <RestaurantLogin /> : <RestaurantSignUp />}
      <div>
        <button onClick={() => setLogin(!login)} className="button-link">
          {login? "Do not have account  ? Signup": "Already have an account ? Login"}
        </button>
      </div>
    </div>
    <Footer className='text-white'/>
    </>
  );
};
export default Restaurant;

// login :- account hai
// signup :-new user
