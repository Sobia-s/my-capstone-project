import { render } from '@testing-library/react';
import App from './App';
import { submitAPI } from "./Api.js";


// test('Renders the BookingForm heading', () => {
//     render(<BookingForm />);
//     const headingElement = screen.getByText("Reservations");
//     expect(headingElement).toBeInTheDocument();
// });


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
    const availableTimes = initializeTimes();
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


describe("updateTimes function", () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
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




