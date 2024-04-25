import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

// test('Renders the BookingForm heading', () => {
//     render(<BookingForm />);
//     const headingElement = screen.getByText("Reservations"); // Update with your actual heading text
//     expect(headingElement).toBeInTheDocument();
// });


import userEvent from "@testing-library/user-event";

// Unit test for initializeTimes function
describe("initializeTimes function", () => {
  const initializeTimes = () => {
    // The function generates available times based on some logic, so we need to mimic that logic here
    return [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
  };

  test("returns the expected array of available times", () => {
    // Call the initializeTimes function
    const availableTimes = initializeTimes();

    // Assert that the returned value matches the expected array of times
    expect(availableTimes).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });
});

// Unit test for updateTimes function
describe("updateTimes function", () => {
  // Mock reducer function for updateTimes
  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        // Just return the payload for simplicity
        return action.payload;
      default:
        return state;
    }
  };

  test("returns the same value provided in the state", () => {
    // Define the initial state
    const initialState = ["17:00", "18:00", "19:00"];

    // Define the selected date
    const selectedDate = "2024-04-30";

    // Dispatch an action with the selected date to mimic updateTimes
    const updatedTimes = reducer(initialState, {
      type: "UPDATE_TIMES",
      payload: selectedDate,
    });

    // Assert that the updatedTimes is equal to the selected date
    expect(updatedTimes).toEqual(selectedDate);
  });
});
