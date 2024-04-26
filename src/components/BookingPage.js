import React, { useReducer } from "react";
import BookingForm from "./BookingForm.js";
import { submitAPI } from "../Api.js";
import { useNavigate } from 'react-router-dom';
import img1 from './images/restaurantImg.png';
import img2 from './images/Chef 1.jpg';
import img3 from './images/restaurantfood.jpg';

const generateAvailableTimes = () => {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      const selectedDate = action.payload;
      const generatedTimes = generateAvailableTimes(selectedDate);
      return generatedTimes;
    default:
      return state;
  }
};

const BookingPage = () => {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(reducer, [], generateAvailableTimes);

  const updateTimes = (selectedDate) => {
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };

  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate('/confirmed-bookings');
    } else {
      
    }
  };

  return (
    <>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} onSubmit={submitForm} />
      <div className="form-imgs">
        <img src={img1} alt="" width={230} height={230} className="res-img" />
        <img src={img2} alt="" width={230} height={230} className="res-img" />
        <img src={img3} alt="" width={230} height={230} className="res-img" />
      </div>
    </>
  );
}

export default BookingPage;




