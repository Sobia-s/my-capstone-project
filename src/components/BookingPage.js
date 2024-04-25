import React, { useReducer } from "react";
import BookingForm from "./BookingForm.js"; // Update import path
import img1 from './images/restaurantImg.png'; // Adjust import paths for images
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
  }};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(reducer, [], generateAvailableTimes);

  const updateTimes = (selectedDate) => {
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };
  return (
    <>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
      <div className="form-imgs">
        <img src={img1} alt="" width={230} height={230} className="res-img" />
        <img src={img2} alt="" width={230} height={230} className="res-img" />
        <img src={img3} alt="" width={230} height={230} className="res-img" />
      </div>
    </>
  );
}

export default BookingPage;







// import React, { useReducer } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import BookingForm from "./BookingForm.js";
// import ConfirmedBooking from "./ConfirmedBooking.js";
// import img1 from './images/restaurantImg.png';
// import img2 from './images/Chef 1.jpg';
// import img3 from './images/restaurantfood.jpg';

// const generateAvailableTimes = () => {
//   return [
//     '17:00',
//     '18:00',
//     '19:00',
//     '20:00',
//     '21:00',
//     '22:00',
//   ];
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "UPDATE_TIMES":
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const BookingPage = () => {
//   const initialAvailableTimes = generateAvailableTimes();
//   const [availableTimes, dispatch] = useReducer(reducer, initialAvailableTimes);
//   const navigate = useNavigate();

//   const updateTimes = (selectedTimes) => {
//     dispatch({ type: "UPDATE_TIMES", payload: selectedTimes });
//   };

//   const fetchAvailableTimes = async (selectedDate) => {
//     try {
//       const response = await fetch(`https://your-api-url/${selectedDate}`);
//       const data = await response.json();
//       return data.availableTimes;
//     } catch (error) {
//       console.error('Error fetching available times:', error);
//       return [];
//     }
//   };

//   const submitAPI = async (formData) => {
//     // Placeholder function to simulate form submission
//     console.log("Form data submitted:", formData);
//     return true; // Simulate successful submission
//   };

//   const submitForm = async (formData) => {
//     const isSubmitted = await submitAPI(formData);
//     console.log("isSubmitted:", isSubmitted); // Add this line for debugging
//     if (isSubmitted) {
//       console.log("Navigating to booking confirmed page..."); // Add this line for debugging
//       navigate('/booking-confirmed');
//     }
//   };
  

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<BookingForm fetchAPI={fetchAvailableTimes} availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />} />
//         <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
//       </Routes>
//       <div className="form-imgs">
//         <img src={img1} alt="" width={230} height={230} className="res-img" />
//         <img src={img2} alt="" width={230} height={230} className="res-img" />
//         <img src={img3} alt="" width={230} height={230} className="res-img" />
//       </div>
//     </>
//   );
// }

// export default BookingPage;
