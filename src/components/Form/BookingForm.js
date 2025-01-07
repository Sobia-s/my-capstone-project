import React, { useState, useEffect, useCallback } from "react";

function BookingForm({ availableTimes, updateTimes, onSubmit }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [formValid, setFormValid] = useState(false);


  const handleFormValidation = useCallback(() => {
    setFormValid(date && time && guests && occasion);
  }, [date, time, guests, occasion]);

  useEffect(() => {
    handleFormValidation();
  }, [date, time, guests, occasion, handleFormValidation]);

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Call the onSubmit callback function with the form data
    onSubmit({ date, time, guests, occasion });
  };

  return (
    <>
      <div className="res-container">
        <form onSubmit={handleFormSubmit}>
          <h1 id="form-id">Reservations</h1>
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
          <label htmlFor="guests">Number of guests</label><br />
          <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuests} className="input-container" required /><br />
          <label htmlFor="occasion">Occasion</label><br />
          <select id="occasion" value={occasion} onChange={handleOccasion} className="input-container" required >
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
          </select>
          <input type="submit" value="Make Your reservation" disabled={!formValid} />
        </form>
      </div>
    </>
  );
}

export default BookingForm;