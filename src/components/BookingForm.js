import React, { useState, useReducer } from "react";

const generateAvailableTimes = (selectedDate) => {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
};
function BookingForm({ availableTimes, updateTimes }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        const selectedDate = action.payload;
        const generatedTimes = generateAvailableTimes(selectedDate);
        return generatedTimes; // Update the state to the generated times
      default:
        return state;
    }
  };
  const [times, dispatch] = useReducer(reducer, availableTimes);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate);
  };

  const handleGuests = (event) => {
    setGuests(event.target.value);
  };

  const handleOccasion = (event) => {
    setOccasion(event.target.value);
  };

  return (
    <>
      <h1 id="form-id">Reservations</h1>
      <div className="res-container">
        <div className="form-container1">
          <form>
            <label htmlFor="res-date">Choose date</label><br></br>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} className="input-container" /><br></br>
            <label htmlFor="res-time">Choose time</label><br></br>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} className="input-container" >
              {times.map((timeOption) => (
                <option key={timeOption} value={timeOption}>
                  {timeOption}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className="form-container2">
          <form>
            <label htmlFor="guests">Number of guests</label><br></br>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuests} className="input-container" /><br></br>
            <label htmlFor="occasion">Occasion</label><br></br>
            <select id="occasion" value={occasion} onChange={handleOccasion} className="input-container" ><br></br>
              <option>Birthday</option>
              <option>Engagement</option>
              <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
          </form>
        </div>
      </div>
    </>
  )}

export default BookingForm;






// import React, { useState, useEffect } from "react";

// function BookingForm({ availableTimes, updateTimes, fetchAPI, submitForm }) {
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [guests, setGuests] = useState(1);
//   const [occasion, setOccasion] = useState("Birthday");

//   useEffect(() => {
//     if (date) {
//       fetchAPI(date)
//         .then(times => {
//           updateTimes(times);
//           if (!times.includes(time)) {
//             setTime("");
//           }
//         })
//         .catch(error => {
//           console.error("Error fetching available times:", error);
//         });
//     }
//   }, [date, fetchAPI, time, updateTimes]);

//   const handleDateChange = event => {
//     const selectedDate = event.target.value;
//     setDate(selectedDate);
//     setTime("");
//   };

//   const handleGuests = event => {
//     setGuests(event.target.value);
//   };

//   const handleOccasion = event => {
//     setOccasion(event.target.value);
//   };

//   const handleTimeChange = event => {
//     const selectedTime = event.target.value;
//     setTime(selectedTime);
//   };

//   const handleSubmit = event => {
//     event.preventDefault(); // Prevent form submission
//     // Call submitForm function with form data
//     submitForm({ date, time, guests, occasion });
//   };

//   return (
//     <>
//       <h1 id="form-id">Reservations</h1>
//       <div className="res-container">
//         <div className="form-container1">
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="res-date">Choose date</label><br />
//             <input type="date" id="res-date" value={date} onChange={handleDateChange} className="input-container" /><br />
//             <label htmlFor="res-time">Choose time</label><br />
//             <select id="res-time" value={time} onChange={handleTimeChange} className="input-container" disabled={availableTimes.length === 0}>
//               {availableTimes.map((timeOption) => (
//                 <option key={timeOption} value={timeOption}>
//                   {timeOption}
//                 </option>
//               ))}
//             </select>
//             <input type="submit" value="Make Your reservation" />
//           </form>
//         </div>
//         <div className="form-container2">
//           <form>
//             <label htmlFor="guests">Number of guests</label><br />
//             <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuests} className="input-container" /><br />
//             <label htmlFor="occasion">Occasion</label><br />
//             <select id="occasion" value={occasion} onChange={handleOccasion} className="input-container" >
//               <option>Birthday</option>
//               <option>Engagement</option>
//               <option>Anniversary</option>
//             </select>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BookingForm;


