import React, { useState, useEffect } from "react";

const generateAvailableTimes = (selectedDate) => {
  // Mocked function to generate available times
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
};

function BookingForm({ availableTimes, updateTimes, onSubmit }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    handleFormValidation();
  }, [date, time, guests, occasion]);

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

  const handleFormValidation = () => {
    setFormValid(date && time && guests && occasion);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Call the onSubmit callback function with the form data
    onSubmit({ date, time, guests, occasion });
  };

  return (
    <>
      <h1 id="form-id">Reservations</h1>
      <div className="res-container">
        <div className="form-container1">
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="res-date">Choose date</label><br />
            <input type="date" id="res-date" value={date} onChange={handleDateChange} className="input-container" required /><br />
            <label htmlFor="res-time">Choose time</label><br />
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} className="input-container" required>
              {availableTimes.map((timeOption) => (
                <option key={timeOption} value={timeOption}>
                  {timeOption}
                </option>
              ))}
            </select>
            <input type="submit" value="Make Your reservation" disabled={!formValid} />
          </form>
        </div>
        <div className="form-container2">
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="guests">Number of guests</label><br />
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuests} className="input-container" required /><br />
            <label htmlFor="occasion">Occasion</label><br />
            <select id="occasion" value={occasion} onChange={handleOccasion} className="input-container" required >
              <option>Birthday</option>
              <option>Engagement</option>
              <option>Anniversary</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingForm;







